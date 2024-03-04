import {
  getAllCharacters,
  getCharactersBySearch,
  getSingleCharacter
} from '../controllers/characters-controller.js'
import { strict as assert } from 'assert'

describe('Character Controller', () => {
  describe('getAllCharacters', () => {
    it('should return status 200 and JSON data', async () => {
      const req = {}
      const res = {
        status: (statusCode) => {
          assert.strictEqual(statusCode, 200)
          return res
        },
        json: (data) => {
          assert.strictEqual(typeof data, 'object')
          // Add more assertions if needed
        }
      }

      await getAllCharacters(req, res)
    })
  })

  describe('getCharactersBySearch', () => {
    it('should return status 200 and JSON data', async () => {
      const req = {
        query: {
          q: 'test'
        }
      }
      const res = {
        status: (statusCode) => {
          assert.strictEqual(statusCode, 200)
          return res
        },
        json: (data) => {
          assert.strictEqual(typeof data, 'object')
          // Add more assertions if needed
        }
      }

      await getCharactersBySearch(req, res)
    })
  })

  describe('getSingleCharacter', () => {
    it('should return status 200 and JSON data', async () => {
      const req = {
        params: {
          id: '123'
        }
      }
      const res = {
        status: (statusCode) => {
          assert.strictEqual(statusCode, 200)
          return res
        },
        json: (data) => {
          assert.strictEqual(typeof data, 'object')
          // Add more assertions if needed
        }
      }

      await getSingleCharacter(req, res)
    })
  })
})
