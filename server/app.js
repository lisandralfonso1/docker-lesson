const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const { Users } = require('./db')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  Users.find({}, (err, data) => {
    res.send(data)
  })
})

app.post('/', (req, res) => {
  Users.create({ name: req.body.name }, (err, data) => {
    res.send(200)
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))