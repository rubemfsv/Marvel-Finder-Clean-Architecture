import { AddAccount, IAddAccount } from '@/domain/usecases';
import { mockAccountModel, mockHttpResponseModel } from '@/domain/test';
import { RemoteAddAccountNamespace } from '@/data/usecases/';
import { HttpResponseModel } from '@/domain/models';

export class AddAccountSpy implements IAddAccount {
  account = mockAccountModel();
  params: AddAccount.Params;
  callsCount = 0;

  async add(
    params: AddAccount.Params
  ): Promise<HttpResponseModel<RemoteAddAccountNamespace.Model>> {
    this.params = params;
    this.callsCount++;

    return Promise.resolve(mockHttpResponseModel(this.account));
  }
}
