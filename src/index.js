import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
  res.send({ text: process.env.PEXELS_API_KEY })
})

app.listen(port, () => {
  console.log(`Server starts on port ${port}`)
})
