import { AuthorizeHttpClientDecorator } from '@/main/decorators';
import { makeAxiosHttpClient } from '@/main/factories/http';
import { IHttpClient } from '@/data/protocols/http';

export const makeAuthorizeHttpClientDecorator = (): IHttpClient =>
  new AuthorizeHttpClientDecorator(
    makeAxiosHttpClient()
  );
