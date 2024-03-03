import express from 'express'
import {
  getAllCharacters,
  getSingleCharacter
} from '../controllers/characters-controller.js'

const router = express.Router()

router.get('/', getAllCharacters)
router.get('/:id', getSingleCharacter)

export default router
