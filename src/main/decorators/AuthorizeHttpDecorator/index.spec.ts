import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { mockHttpRequest, HttpClientSpy } from '@/data/test'
import { HttpRequest } from '@/data/protocols/http'

import faker from 'faker'

type SutTypes = {
  sut: AuthorizeHttpClientDecorator
  httpClientSpy: HttpClientSpy
}

const makeSut = (): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new AuthorizeHttpClientDecorator(httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('AuthorizeHttpGetClientDecorator', () => {
  test('Should call GetStorage with correct value', async () => {
    const { sut } = makeSut()

    await sut.request(mockHttpRequest())
  })

  test('Should not add headers if request is invalid', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      headers: {
        field: faker.random.words()
      }
    }

    await sut.request(httpRequest)

    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.method).toBe(httpRequest.method)
    expect(httpClientSpy.headers).toEqual(httpRequest.headers)
  })

  test('Should add headers to HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete'])
    }

    await sut.request(httpRequest)

    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.method).toBe(httpRequest.method)
    expect(httpClientSpy.headers).toEqual({
      'Authorization': 'Bearer ' + 'token_aqui'
    })
  })

  test('Should merge headers to HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut()
    const field = faker.random.words()
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      headers: {
        field
      }
    }

    await sut.request(httpRequest)

    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.method).toBe(httpRequest.method)
    expect(httpClientSpy.headers).toEqual({
      field,
      'Authorization': 'Bearer ' + 'token_aqui'
    })
  })

  test('Should return the same result as HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut()

    const httpResponse = await sut.request(mockHttpRequest())

    expect(httpResponse).toEqual(httpClientSpy.response)
  })
})
