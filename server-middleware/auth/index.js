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


 app.get('/get-account-info.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/customerusers?filter[email]=${req.headers.username}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
      'Content-Type': 'application/vnd.api+json',
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

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
      username: req.headers.username,
      password: req.headers.password,
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
});

app.get('/oAuthForgot.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/oauth2-token`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      grant_type: 'client_credentials',
      client_id: '_Raz6h0w3YqlpwnqOqVJNXZv5eWtTOL8',
      client_secret:
        'xPeyhOTUF2M0QqO8k8UDCOGS3-RfDhoUJjEVg8Pmtk_VYSGmNHLNASWh6Iu0xjUb30FgLSma58X4jEMgYX66Uw',
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/resetPassword.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/api/customeruserresetpassword`,
    headers: {
      Authorization: `Bearer ${req.headers.token}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    data: {
      meta: {
        token: req.headers.reset,
        password: req.headers.password,
      },
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/sendEmailForgot.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/api/customeruserforgotpassword`,
    headers: {
      Authorization: `Bearer ${req.headers.token}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    data: {
      meta: {
        email: req.headers.email,
      },
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

