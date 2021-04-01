import { RemoteLoadCharacterList } from './RemoteLoadCharacterList'
import { HttpClientSpy } from '@/data/test'
import { mockCharacterListModel } from '@/domain/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { HttpResponseModel } from '@/domain/models';

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadCharacterList
  httpClientSpy: HttpClientSpy<HttpResponseModel<RemoteLoadCharacterList.Model[]>>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<HttpResponseModel<RemoteLoadCharacterList.Model[]>>()
  const sut = new RemoteLoadCharacterList(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadCharacterList', () => {
  test('Should return a list of SurveyModels if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockCharacterListModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const surveyList = await sut.load()

    expect(surveyList).toEqual({
      code: httpResult.code,
      status: httpResult.status,
      copyright: httpResult.copyright,
      attributionText: httpResult.attributionText,
      attributionHTML: httpResult.attributionHTML,
      etag: httpResult.etag,
      data: {
        offset: httpResult.data.offset,
        limit: httpResult.data.limit,
        total: httpResult.data.total,
        count: httpResult.data.count,
        results: [
          {
            id: httpResult.data.results[0].id,
            name: httpResult.data.results[0].name,
            description: httpResult.data.results[0].description,
            modified: httpResult.data.results[0].modified,
            thumbnail: {
              path: httpResult.data.results[0].thumbnail.path,
              extension: httpResult.data.results[0].thumbnail.extension
            },
            resourceURI: httpResult.data.results[0].resourceURI,
            comics: {
              available: httpResult.data.results[0].comics.available,
              collectionURI: httpResult.data.results[0].comics.collectionURI,
              items: httpResult.data.results[0].comics.items,
              returned: httpResult.data.results[0].comics.returned
            },
            series: {
              available: httpResult.data.results[0].series.available,
              collectionURI: httpResult.data.results[0].series.collectionURI,
              items: httpResult.data.results[0].series.items,
              returned: httpResult.data.results[0].series.returned
            },
            stories: {
              available: httpResult.data.results[0].stories.available,
              collectionURI: httpResult.data.results[0].stories.collectionURI,
              items: httpResult.data.results[0].stories.items,
              returned: httpResult.data.results[0].stories.returned
            },
            events: {
              available: httpResult.data.results[0].events.available,
              collectionURI: httpResult.data.results[0].events.collectionURI,
              items: httpResult.data.results[0].events.items,
              returned: httpResult.data.results[0].events.returned
            },
            urls: httpResult.data.results[0].urls
          },
          {
            id: httpResult.data.results[1].id,
            name: httpResult.data.results[1].name,
            description: httpResult.data.results[1].description,
            modified: httpResult.data.results[1].modified,
            thumbnail: {
              path: httpResult.data.results[1].thumbnail.path,
              extension: httpResult.data.results[1].thumbnail.extension
            },
            resourceURI: httpResult.data.results[1].resourceURI,
            comics: {
              available: httpResult.data.results[1].comics.available,
              collectionURI: httpResult.data.results[1].comics.collectionURI,
              items: httpResult.data.results[1].comics.items,
              returned: httpResult.data.results[1].comics.returned
            },
            series: {
              available: httpResult.data.results[1].series.available,
              collectionURI: httpResult.data.results[1].series.collectionURI,
              items: httpResult.data.results[1].series.items,
              returned: httpResult.data.results[1].series.returned
            },
            stories: {
              available: httpResult.data.results[1].stories.available,
              collectionURI: httpResult.data.results[1].stories.collectionURI,
              items: httpResult.data.results[1].stories.items,
              returned: httpResult.data.results[1].stories.returned
            },
            events: {
              available: httpResult.data.results[1].events.available,
              collectionURI: httpResult.data.results[1].events.collectionURI,
              items: httpResult.data.results[1].events.items,
              returned: httpResult.data.results[1].events.returned
            },
            urls: httpResult.data.results[1].urls
          },
          {
            id: httpResult.data.results[2].id,
            name: httpResult.data.results[2].name,
            description: httpResult.data.results[2].description,
            modified: httpResult.data.results[2].modified,
            thumbnail: {
              path: httpResult.data.results[2].thumbnail.path,
              extension: httpResult.data.results[2].thumbnail.extension
            },
            resourceURI: httpResult.data.results[2].resourceURI,
            comics: {
              available: httpResult.data.results[2].comics.available,
              collectionURI: httpResult.data.results[2].comics.collectionURI,
              items: httpResult.data.results[2].comics.items,
              returned: httpResult.data.results[2].comics.returned
            },
            series: {
              available: httpResult.data.results[2].series.available,
              collectionURI: httpResult.data.results[2].series.collectionURI,
              items: httpResult.data.results[2].series.items,
              returned: httpResult.data.results[2].series.returned
            },
            stories: {
              available: httpResult.data.results[2].stories.available,
              collectionURI: httpResult.data.results[2].stories.collectionURI,
              items: httpResult.data.results[2].stories.items,
              returned: httpResult.data.results[2].stories.returned
            },
            events: {
              available: httpResult.data.results[2].events.available,
              collectionURI: httpResult.data.results[2].events.collectionURI,
              items: httpResult.data.results[2].events.items,
              returned: httpResult.data.results[2].events.returned
            },
            urls: httpResult.data.results[2].urls
          }
        ]
      },
    })

  })

  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.load()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.load()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.load()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
