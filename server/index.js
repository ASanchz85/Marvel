import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(morgan('dev'))
app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
)

app.use(express.json({ limit: '5mb' }))

import('./routes/characters-route.js').then((charactersRoute) => {
  app.use('/api/characters', charactersRoute.default)
  app.use('/api/characters/:id', charactersRoute.default)
  app.use('/api/characters/search', charactersRoute.default)
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
