export interface LayoutProps<TParams = Record<string, string>> {
  children: React.ReactNode;
  params?: TParams;
}

export interface PageProps<TParams = Record<string, string>> {
  params?: TParams;
  searchParams: SearchParams;
}

export type SearchParams = { [key: string]: string | string[] | undefined };
