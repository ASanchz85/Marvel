import { jest, describe, expect, it } from '@jest/globals'
import fetch from 'node-fetch' // Import fetch for mocking purposes
import {
  getAllCharacters,
  getCharactersBySearch,
  getSingleCharacter
} from '..controllers/characters-controller'
import endpointUrlGen from '../utils/endpointUrlGen'

jest.mock('node-fetch')
jest.mock('../utils/endpointUrlGen')

describe('getAllCharacters', () => {
  it('should return characters data', async () => {
    const mockJsonData = { data: 'mocked characters data' }
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockJsonData)
    }
    fetch.mockResolvedValue(mockResponse)
    endpointUrlGen.mockReturnValue('mocked-url')

    const mockReq = {}
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }

    await getAllCharacters(mockReq, mockRes)

    expect(fetch).toHaveBeenCalledWith('mocked-url')
    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith(mockJsonData)
  })

  it('should handle error when fetching characters data', async () => {
    fetch.mockRejectedValue(new Error('Failed to fetch characters'))
    endpointUrlGen.mockReturnValue('mocked-url')

    const mockReq = {}
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }

    await getAllCharacters(mockReq, mockRes)

    expect(fetch).toHaveBeenCalledWith('mocked-url')
    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Bad request' })
  })
})

describe('getCharactersBySearch', () => {
  it('should return characters data based on search query', async () => {
    const mockJsonData = { data: 'mocked characters data' }
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockJsonData)
    }
    fetch.mockResolvedValue(mockResponse)
    endpointUrlGen.mockReturnValue('mocked-url')

    const mockReq = { query: { q: 'search-query' } }
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }

    await getCharactersBySearch(mockReq, mockRes)

    expect(fetch).toHaveBeenCalledWith('mocked-url')
    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith(mockJsonData)
  })

  it('should handle error when fetching characters data based on search query', async () => {
    fetch.mockRejectedValue(new Error('Failed to fetch characters'))
    endpointUrlGen.mockReturnValue('mocked-url')

    const mockReq = { query: { q: 'search-query' } }
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }

    await getCharactersBySearch(mockReq, mockRes)

    expect(fetch).toHaveBeenCalledWith('mocked-url')
    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Bad request' })
  })
})

describe('getSingleCharacter', () => {
  it('should return single character data', async () => {
    // Mock data for single character response
    const mockCharacterData = {
      id: 123,
      name: 'Mocked Character',
      description: 'Mocked description',
      thumbnail: 'mocked-thumbnail-url',
      comics: [
        {
          id: 1,
          title: 'Mocked Comic',
          thumbnail: 'mocked-comic-thumbnail',
          date: '2022'
        }
      ]
    }
    const mockCharacterResponse = {
      ok: true,
      json: jest
        .fn()
        .mockResolvedValue({ data: { results: [mockCharacterData] } })
    }
    fetch.mockResolvedValueOnce(mockCharacterResponse)

    // Mock data for single comic response
    const mockComicData = {
      id: 1,
      title: 'Mocked Comic',
      thumbnail: 'mocked-comic-thumbnail',
      dates: [{ date: '2022-01-01T00:00:00Z', type: 'onsaleDate' }]
    }
    const mockComicResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ data: { results: [mockComicData] } })
    }
    fetch.mockResolvedValueOnce(mockComicResponse)

    endpointUrlGen.mockReturnValue('mocked-url')

    const mockReq = { params: { id: 123 } }
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }

    await getSingleCharacter(mockReq, mockRes)

    expect(fetch).toHaveBeenCalledWith('mocked-url')
    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith(mockCharacterData)
  })

  it('should handle error when fetching single character data', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch character'))
    endpointUrlGen.mockReturnValue('mocked-url')

    const mockReq = { params: { id: 123 } }
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }

    await getSingleCharacter(mockReq, mockRes)

    expect(fetch).toHaveBeenCalledWith('mocked-url')
    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Bad request' })
  })
})
