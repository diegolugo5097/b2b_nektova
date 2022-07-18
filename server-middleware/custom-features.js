const bodyParser = require('body-parser')
const app = require('express')
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

app.get('/login.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/oauth2-token`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      grant_type: 'password',
      client_id: 'dtGgEgUWUm5XImbmBcgCNmHL-n6pAhIh',
      client_secret:
        'LFZzIRsDXgsqJhYK8FDNKiXs3j7QMBRvrh5zsDVj83t5veIb2ac_IbXze7aZSUl4XNQ39d2sAasKSbzcpErnUo',
      username: req.headers.email,
      password: req.headers.pass,
    },
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
