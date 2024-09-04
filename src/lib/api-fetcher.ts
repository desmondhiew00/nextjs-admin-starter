export interface FetcherOptions extends RequestInit {
  params?: Record<string, string>;
  bearerToken?: string;
}

interface FetcherResponse<TData> extends Response {
  data: TData | null;
}

/**
 * For GET request, the body is not needed use params instead
 * @param path Exp: /login
 * @param options
 * @returns
 */
export const apiFetcher = async <TData>(path: string, options?: FetcherOptions): Promise<FetcherResponse<TData>> => {
  const params = options?.params;
  const url = getApiUrl(path, params);
  const config = options || {};

  if (!config?.method) {
    config.method = "GET";
  }

  // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
  if (!config.headers?.hasOwnProperty("Content-Type")) {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
  }

  if (options?.bearerToken) {
    withBearerToken(config, options.bearerToken);
  }

  config.params = undefined;
  config.bearerToken = undefined;

  const response = await fetch(url, config);
  if (response.status === 204) return { ...response, data: null };

  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.message);
  }

  return { ...response, data };
};

const getApiUrl = (path: string, params?: Record<string, string>) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("API_URL is not defined");
  let apiUrl = baseUrl + path;
  if (params) {
    const urlParams = new URLSearchParams(params);
    apiUrl += `?${urlParams.toString()}`;
  }
  return apiUrl;
};

const withBearerToken = (config: RequestInit, token: string) => {
  Object.assign(config, {
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export default apiFetcher;
