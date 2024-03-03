import express from 'express'
import { getAllComics } from '../controllers/comics-controller'

const router = express.Router()

router.get('/', getAllComics)

export default router
