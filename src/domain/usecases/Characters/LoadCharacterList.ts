import { Character, HttpResponseModel } from 'domain/models/';

export interface ILoadCharacterList {
  load: () => Promise<HttpResponseModel<LoadCharacterList.Model[]>>;
}

export namespace LoadCharacterList {
  export type Model = Character.Model
}
