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


app.get('/get-address.js', (req, res) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/api/customeruseraddresses?filter%5BcustomerUser%5D=${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/orders.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/api/orders`,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
    },
    data: {
      data: JSON.parse(req.headers.data),
      included: JSON.parse(req.headers.included),
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

app.get('/price-products.js', (req, res) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/api/products/${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/product-search.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/productsearch?filter%5BsearchQuery%5D=sku~%22${req.headers.sku}%22%20and%20status%20%3D%20%22enabled%22%20and%20inventoryStatus%20%3D%20%22in_stock%22&filter%5Baggregations%5D=inventoryStatus%20count%20inventoryStatusCount`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
      'X-Include': 'noHateoas;totalCount',
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

app.get('/shoppingList.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/shoppinglists?filter%5BcustomerUser%5D=${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/shoppingListPost.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/api/shoppinglists`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
    },
    data: req.headers.data,
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

