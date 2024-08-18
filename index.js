import cors from 'cors'
import express from 'express'

const app = express()
const port = 5550

app.use(cors())

app.get('/', (req, res) => {
  res.send({ text: 'hello world!' })
})

app.listen(port, () => {
  console.log(`Server starts on port ${port}`)
})
