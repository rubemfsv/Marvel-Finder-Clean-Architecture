import { ItemModel } from "./ItemModel";
import { StoriesModel } from "./StoriesModel";
import { UrlModel } from "./UrlModel";

export type CharacterModel = {
  id: number,
  name: string,
  description: string,
  modified: string,
  thumbnail: {
    path: string,
    extension: string
  },
  resourceURI: string,
  comics: {
    available: number,
    collectionURI: string,
    items: ItemModel[],
    returned: number
  },
  series: {
    available: number,
    collectionURI: string,
    items: ItemModel[],
    returned: number
  },
  stories: {
    available: number,
    collectionURI: string,
    items: StoriesModel[],
    returned: number
  },
  events: {
    available: number,
    collectionURI: string,
    items: ItemModel[],
    returned: number
  },
  urls: UrlModel[]
}
