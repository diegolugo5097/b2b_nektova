const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')
const cors = require('cors')
const baseUrl = 'https://b2b.thecornercloud.com'

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', baseUrl) // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

module.exports = {
  path: '/',
  handler: app,
}
app.use(bodyParser.json())
app.use(cors())

let options

app.get('/fetchApi.js', (req, res) => {
  if (req.headers.methodMiddle === 'POST') {
    options = {
      method: req.headers.methodMiddle,
      url: `${baseUrl}/${req.headers.url}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: req.headers.data,
    }
  } else if (req.headers.methodMiddle === 'GET') {
    options = {
      method: req.headers.methodMiddle,
      url: `${baseUrl}/${req.headers.url}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${req.headers.token}`,
      },
    }
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})
