import { RemoteLoadCharacterList } from '@/data/usecases';
import { ILoadCharacterList } from '@/domain/usecases';
import { makeAxiosHttpClient, makeApiUrl } from '../../../http';

export const makeLoadCharacterList = (hero: string): ILoadCharacterList => {
  const remoteLoadCharacterList = new RemoteLoadCharacterList(
    makeApiUrl(
      `/characters?ts=1&apikey=cc3a419a1f142ca1a1230ff360c178ee&hash=e6be44dd2255fdf5720f087595275f0c${
        hero && `&name=${hero}`
      }`
    ),
    makeAxiosHttpClient()
  );

  return remoteLoadCharacterList;
};
