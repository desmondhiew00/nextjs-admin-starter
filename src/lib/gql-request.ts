import { getSession } from "@/lib/auth";
import { GraphQLClient } from "graphql-request";
import { get as _get } from "lodash";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL || "";
type FetcherVariables = Record<string, unknown>;
type FetcherData = Record<string, unknown>;

export const gqlFetcher = <TData extends FetcherData, TVariables extends FetcherVariables>(
  query: string,
  variables?: TVariables,
  _options?: RequestInit["headers"],
): ((type?: "client" | "server" | unknown) => Promise<TData>) => {
  return async (_type = "client") => {
    const { session } = await getSession();
    return await gqlRequest(query, variables || {}, session?.accessToken || "");
  };
};

const gqlRequest = async <TData extends FetcherData, TVariables extends FetcherVariables>(
  query: string,
  variables: TVariables,
  token: string,
) => {
  try {
    if (!endpoint) throw new Error("No GraphQL endpoint provided.");
    const operationType = query.trim().startsWith("mutation") ? "mutation" : "query";
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      "x-apollo-operation-name": operationType,
    };

    const client = new GraphQLClient(endpoint, { headers, cache: "no-store" });
    const res = await client.request<TData>({
      document: query,
      variables: variables,
      requestHeaders: headers,
    });
    return res;
  } catch (e) {
    const msg = _get(e, "response.errors[0].message");
    if (msg) throw new Error(msg);
    throw e;
  }
};

// export const gqlFetcherServer = async <TData extends FetcherData, TVariables extends FetcherVariables>(query: string, variables?: TVariables) => {
//   try {
//     const token = await getServerAccessToken();
//     return await gqlRequest<TData, TVariables>(query, variables || ({} as TVariables), token);
//   } catch (e: unknown) {
//     throw e;
//   }
// };

// export const gqlFetch = async <TData extends FetcherData, TVariables extends FetcherVariables>(query: string, variables?: TVariables) => {
//   const token = await getServerAccessToken();
//   const response = await fetch(endpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify({ query, variables }),
//     cache: "no-store"
//   });
//   const json = await response.json();
//   if (json.errors) {
//     throw new Error(json.errors[0].message);
//   }
//   return json.data as TData;
// };
