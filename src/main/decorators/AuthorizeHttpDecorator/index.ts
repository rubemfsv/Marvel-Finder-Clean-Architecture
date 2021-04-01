import { IHttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http';

export class AuthorizeHttpClientDecorator implements IHttpClient {
  constructor(
    private readonly httpClient: IHttpClient
  ) { }

  async request(data: HttpRequest): Promise<HttpResponse> {
    Object.assign(data, {
      headers: Object.assign(data.headers || {}, {
        Authorization: 'Bearer ' + 'token_aqui',
      }),
    });

    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}
