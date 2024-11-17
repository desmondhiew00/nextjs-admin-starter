import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  documents: "src/graphql/**/*.{graphql,gql}",
  overwrite: true,
  generates: {
    "src/graphql/index.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-query"],
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
  },
  config: {
    reactQueryVersion: 5,
    fetcher: "@/lib/gql-request#gqlFetcher",
    addInfiniteQuery: true,
    exposeQueryKeys: true,
    exposeFetcher: true,
    scalars: {
      Upload: "File | Blob",
      Decimal: "string",
      DateTime: "Date | string",
      Date: "Date | string",
    },
  },
};

export default config;
