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
