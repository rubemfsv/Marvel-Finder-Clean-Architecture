export namespace Character {
  export type Model = {
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

  type ItemModel = {
    resourceURI: string,
    name: string,
  }

  export type StoriesModel = {
    resourceURI: string,
    name: string,
    type: string
  }

  export type UrlModel = {
    type: string
    url: string,
  }
}
