import endpointUrlGen from '../utils/endpointUrlGen'
import { jest, describe, expect, beforeEach, it } from '@jest/globals'
import { hashGenerator, publicKey } from '../utils/hashGenerator'

jest.mock('./hashGenerator')

describe('endpointUrlGen', () => {
  beforeEach(() => {
    hashGenerator.mockReturnValue('mocked-hash')
  })

  it('should return correct URL for characters endpoint', () => {
    const expectedUrl = `http://gateway.marvel.com/v1/public/characters?limit=20&ts=mocked-timestamp&apikey=${publicKey}&hash=mocked-hash`
    const url = endpointUrlGen('characters')
    expect(url).toBe(expectedUrl)
  })

  it('should return correct URL for characters with numeric endpoint', () => {
    const expectedUrl = `http://gateway.marvel.com/v1/public/characters/123?&ts=mocked-timestamp&apikey=${publicKey}&hash=mocked-hash`
    const url = endpointUrlGen('123')
    expect(url).toBe(expectedUrl)
  })

  it('should return correct URL for comics endpoint with showComics flag', () => {
    const expectedUrl = `http://gateway.marvel.com/v1/public/comics/endpoint?ts=mocked-timestamp&apikey=${publicKey}&hash=mocked-hash`
    const url = endpointUrlGen('endpoint', 20, true)
    expect(url).toBe(expectedUrl)
  })

  it('should return correct URL for search query endpoint', () => {
    const expectedUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=query&limit=20&ts=mocked-timestamp&apikey=${publicKey}&hash=mocked-hash`
    const url = endpointUrlGen('query')
    expect(url).toBe(expectedUrl)
  })

  it('should return null for empty endpoint', () => {
    const url = endpointUrlGen('')
    expect(url).toBeNull()
  })

  it('should return null for non-numeric limit', () => {
    const url = endpointUrlGen('characters', 'invalid')
    expect(url).toBeNull()
  })

  it('should limit limit to 100 if greater than 100', () => {
    const expectedUrl = `http://gateway.marvel.com/v1/public/characters?limit=100&ts=mocked-timestamp&apikey=${publicKey}&hash=mocked-hash`
    const url = endpointUrlGen('characters', 150)
    expect(url).toBe(expectedUrl)
  })

  it('should limit limit to 1 if less than 1', () => {
    const expectedUrl = `http://gateway.marvel.com/v1/public/characters?limit=1&ts=mocked-timestamp&apikey=${publicKey}&hash=mocked-hash`
    const url = endpointUrlGen('characters', -5)
    expect(url).toBe(expectedUrl)
  })
})
