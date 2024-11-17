#!/bin/bash

yellow='\033[1;33m'
cyan='\033[0;36m'
green='\033[0;32m'
nc='\033[0m'

# Let the user select the environment mode (prod or staging)
read -p "Select environment (production / staging / development): " ENV_MODE

# Validate the environment mode
if [ "$ENV_MODE" != "production" ] && [ "$ENV_MODE" != "staging" ] && [ "$ENV_MODE" != "development" ]; then
  echo "Error: Invalid environment mode. Please select either ${yellow}'production' | 'staging' | 'development'${nc}."
  exit 1
fi

# Load deployment credentials from .env file
if [ -f deployment/.deployment.env ]; then
  export $(grep -v '^#' deployment/.deployment.env | xargs) > /dev/null
else 
  echo "Error: ${yellow}.deployment.env${nc} file not found. Please make sure the file exists."
  exit 1
fi

# Variables
NODE_ENV=$ENV_MODE
PROJECT_NAME=$(node -p "require('./package.json').name")
APP_NAME="$PROJECT_NAME"
if [ -n "$REPOSITORY_NAME" ]; then
  APP_NAME=$REPOSITORY_NAME
fi
GIT_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "dev")

AWS_REGION="$AWS_DEPLOYMENT_REGION" # e.g. us-east-1
AWS_ACCOUNT_ID="$AWS_DEPLOYMENT_ACCOUNT_ID" # e.g. 123456789012
AWS_PROFILE="$AWS_DEPLOYMENT_PROFILE" # e.g. default

IMAGE_NAME="$PROJECT_NAME/$ENV_MODE/$APP_NAME" 
IMAGE_TAG="${IMAGE_TAG:-$GIT_TAG}"
DOCKER_IMAGE_URI="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ENV_MODE/$APP_NAME"

# Check if required environment variables are set
if [ -z "$AWS_REGION" ] || [ -z "$AWS_ACCOUNT_ID" ] || [ -z "$AWS_PROFILE" ]; then
  echo "Error: Required environment variables are not set.";
  if [ -z "$AWS_REGION" ]; then
    echo "${yellow}AWS_DEPLOYMENT_REGION${nc} is not set."
  fi
  if [ -z "$AWS_ACCOUNT_ID" ]; then
    echo "${yellow}AWS_DEPLOYMENT_ACCOUNT_ID${nc} is not set."
  fi
  if [ -z "$AWS_PROFILE" ]; then
    echo "${yellow}AWS_DEPLOYMENT_PROFILE${nc} is not set."
  fi
  exit 1
fi

# Convert staging to NextJs test environment
if [ "$NODE_ENV" = "staging" ]; then
  if [ -f .env.test ]; then
    NODE_ENV="test"
  else
    echo "Error: .env.test file not found. Please make sure the file exists. (Staging enviroment requires .env.test file)"
    exit 1
  fi
fi

# Confirmation deployment
echo "--------------------------------------"
echo "${cyan}Using AWS Profile: ${yellow}$AWS_PROFILE${nc}"
echo "${cyan}Image Name: ${yellow}$IMAGE_NAME${nc}"
echo "${cyan}Docker Image URI:${nc}"
echo "${cyan} - Tag (dev): ${yellow}"$DOCKER_IMAGE_URI:$IMAGE_TAG"${nc}"
echo "${cyan} - Tag (latest): ${yellow}"$DOCKER_IMAGE_URI:latest"${nc}"
echo "--------------------------------------"

read -p "Do you want to continue with the deployment? (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ]; then
  echo "Deployment cancelled."
  exit 1
fi

# Set AWS credentials in the environment
export AWS_PROFILE

build_and_push_app() {
  echo ""

  # 1: Authenticate Docker to the Amazon ECR registry
  echo "${cyan}Authenticating with ECR...${nc}"
  aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

  # 2: Build Docker Image
  echo "${cyan}Building Docker image for ${yellow}$IMAGE_NAME${nc}..."
  docker build --no-cache --platform linux/amd64 --build-arg NODE_ENV=$NODE_ENV -f Dockerfile -t $IMAGE_NAME:$IMAGE_TAG .

  # 3: Tag Docker Image for ECR
  echo "${cyan}Tagging Docker image for ${yellow}$IMAGE_TAG, latest${nc} ${cyan}...${nc}"
  docker tag $IMAGE_NAME:$IMAGE_TAG $DOCKER_IMAGE_URI:$IMAGE_TAG
  docker tag $IMAGE_NAME:$IMAGE_TAG" "$DOCKER_IMAGE_URI:latest

  # 4: Push Docker Image to ECR
  echo "${cyan}Pushing Docker image for ${yellow}$IMAGE_NAME${nc} to ECR..."
  docker push $DOCKER_IMAGE_URI:$IMAGE_TAG
  docker push $DOCKER_IMAGE_URI:latest

  # 5: Remove old Docker images
  echo "${cyan}Removing old Docker images...${nc}"
  docker image prune -f

  # Success message
  echo "\nDocker image for ${yellow}$IMAGE_NAME${nc} pushed to ECR successfully: ${yellow}$DOCKER_IMAGE_URI${nc}"
}

build_and_push_app

echo "\n${green}ECR Deployment completed successfully.${nc}\n"