import express from 'express'
import {
  getAllCharacters,
  getSingleCharacter,
  getCharactersBySearch
} from '../controllers/characters-controller.js'

const router = express.Router()

router.get('/', getAllCharacters)
router.get('/search', getCharactersBySearch)
router.get('/:id', getSingleCharacter)

export default router
