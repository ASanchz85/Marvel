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
    origin: 'http://localhost:5173'
  })
)
app.use(express.json({ limit: '5mb' }))
app.use('/api/characters', require('./routes/characters-route'))
app.use('/api/characters/:id', require('./routes/characters-route'))
app.use('/api/comics', require('./routes/comics-route'))

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
