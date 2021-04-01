import { RemoteAuthenticationamespace } from '@/data/usecases/';
import { HttpResponseModel } from '@/domain/models';
import { mockAccountModel, mockHttpResponseModel } from '@/domain/test';
import { Authentication, IAuthentication } from '@/domain/usecases';

export class AuthenticationSpy implements IAuthentication {
  account = mockAccountModel();
  params: Authentication.Params;
  callsCount = 0;

  async auth(
    params: Authentication.Params
  ): Promise<HttpResponseModel<RemoteAuthenticationamespace.Model>> {
    this.params = params;
    this.callsCount++;
    return Promise.resolve(mockHttpResponseModel(this.account));
  }
}
