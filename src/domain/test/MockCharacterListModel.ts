import { ILoadCharacterList, LoadCharacterList } from '../usecases'

import faker from 'faker'
import { HttpResponseModel } from '../models'

export const mockCharacterModel = (): LoadCharacterList.Model => ({
  id: faker.random.number(),
  name: faker.name.findName(),
  description: faker.random.words(),
  modified: faker.date.recent().toISOString(),
  thumbnail: {
    path: faker.random.words(),
    extension: faker.random.words()
  },
  resourceURI: faker.internet.url(),
  comics: {
    available: faker.random.number(),
    collectionURI: faker.internet.url(),
    items: [
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
      },
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
      },
    ],
    returned: faker.random.number()
  },
  series: {
    available: faker.random.number(),
    collectionURI: faker.internet.url(),
    items: [
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
      },
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
      },
    ],
    returned: faker.random.number()
  },
  stories: {
    available: faker.random.number(),
    collectionURI: faker.internet.url(),
    items: [
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
        type: faker.random.word(),
      },
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
        type: faker.random.word(),
      },
    ],
    returned: faker.random.number()
  },
  events: {
    available: faker.random.number(),
    collectionURI: faker.internet.url(),
    items: [
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
      },
      {
        resourceURI: faker.internet.url(),
        name: faker.name.findName(),
      },
    ],
    returned: faker.random.number()
  },
  urls: [
    {
      url: faker.internet.url(),
      type: faker.name.findName(),
    },
    {
      url: faker.internet.url(),
      type: faker.name.findName(),
    },
  ]
})

export const mockCharacterListModel = (): HttpResponseModel<LoadCharacterList.Model[]> => ({
  code: faker.random.number(),
  status: faker.random.word(),
  copyright: faker.random.words(),
  attributionText: faker.random.words(),
  attributionHTML: faker.random.words(),
  etag: faker.random.words(),
  data: {
    offset: faker.random.number(),
    limit: faker.random.number(),
    total: faker.random.number(),
    count: faker.random.number(),
    results: [
      mockCharacterModel(),
      mockCharacterModel(),
      mockCharacterModel()
    ]
  },
})

export class ILoadCharacterListSpy implements ILoadCharacterList {
  callsCount = 0
  characters = mockCharacterListModel()

  async load(): Promise<HttpResponseModel<LoadCharacterList.Model[]>> {
    this.callsCount++
    return this.characters
  }
}
