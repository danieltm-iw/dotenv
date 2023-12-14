const config = require('./config')
const express = require('express')
const app = express()

let mode = ''

console.log(`NODE_ENV==>${JSON.stringify(config)}`)

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.listen(config.PORT, () => {
  console.log(`App is listening on http://${config.HOST}:${config.PORT}`)
})
