// declearation of process.env

declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    NEXT_PUBLIC_GRAPHQL_URL: string;
  }
}
