export type HttpResponseModel<T = unknown> = {
  code: number;
  status: string;
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  etag: string,
  data: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: T[] | null;
  },
};
