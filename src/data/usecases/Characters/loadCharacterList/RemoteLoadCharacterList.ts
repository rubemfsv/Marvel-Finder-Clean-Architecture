import { HttpStatusCode, IHttpClient } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors';
import { ILoadCharacterList, LoadCharacterList } from '@/domain/usecases';
import { HttpResponseModel } from '@/domain/models';

export class RemoteLoadCharacterList implements ILoadCharacterList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<HttpResponseModel<RemoteLoadCharacterList.Model[]>>
  ) { }

  async load(): Promise<HttpResponseModel<RemoteLoadCharacterList.Model[]>> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteRepositoryToLoad: HttpResponseModel<RemoteLoadCharacterList.Model[]> = httpResponse.body;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteRepositoryToLoad;
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadCharacterList {
  export type Model = LoadCharacterList.Model
}
