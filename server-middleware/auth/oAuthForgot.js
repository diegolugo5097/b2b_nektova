const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios');
const cors = require('cors');
const baseUrl = 'https://b2b.thecornercloud.com';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', baseUrl); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

module.exports = {
  path: '/',
  handler: app,
};
app.use(bodyParser.json());
app.use(cors());

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
