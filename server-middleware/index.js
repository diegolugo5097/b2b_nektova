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
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/products.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/products`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req?.headers?.token}`,
    },
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => console.log(err, 'error'))
})

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
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/product-search.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/productsearch?filter%5BsearchQuery%5D=sku~%22${req.headers.sku}%22%20and%20status%20%3D%20%22enabled%22%20and%20inventoryStatus%20%3D%20%22in_stock%22&filter%5Baggregations%5D=inventoryStatus%20count%20inventoryStatusCount`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
      'X-Include': 'noHateoas;totalCount',
    },
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/price-products.js', (req, res) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/api/products/${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/login.js', (req, res) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/api/login`,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
    data: {
      meta: {
        email: req.headers.email,
        password: req.headers.password,
      },
    },
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => res.status(400).send(err))
})

app.get('/postQuote.js', (req, res) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/api/rfqs`,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
    },
    data: {
      data: JSON.parse(req.headers.data),
    },
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.status(400).send(err)
      console.log(err)
    })
})

app.get('/get-orders.js', (req, res) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/api/orders?page%5Bnumber%5D=1&page%5Bsize%5D=-1&sort=id&filter%5BcustomerUser%5D=${req.headers.id}&include=internal_status&fields%5Borderinternalstatuses%5D=name&fields%5Borders%5D=internal_status,totalValue`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req?.headers?.token}`,
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/get-order-details.js', (req, res) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/api/orders/${req.headers.id}?include=lineItems&fields%5Borders%5D=identifier,poNumber,lineItems,customerNotes,subtotalValue,createdAt,paymentStatus,totalValue,paymentTerm,shipUntil,shipUntil&fields%5Borderlineitems%5D=productName,productSku,quantity,price,productUnitCode`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req?.headers?.token}`,
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/get-address.js', (req, res) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/api/customeruseraddresses?filter%5BcustomerUser%5D=${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/get-account-info.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/customerusers?filter[email]=${req.headers.username}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
      'Content-Type': 'application/vnd.api+json',
    },
  }
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})

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

app.get('/get-categories.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/mastercatalogtree?include=category&fields%5Bmastercatalogcategories%5D=title&fields%5Bmastercatalogtree%5D=order,category`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/get-products-category.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/productsearch?filter%5BsearchQuery%5D=status%20%3D%20%22enabled%22%20and%20inventoryStatus%20%3D%20%22in_stock%22%20and%20category%20%3D%20${req.headers.categoryid}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/get-shopping-list.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/shoppinglists?filter%5BcustomerUser%5D=${req.headers.userid}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/post-shopping-list.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/api/shoppinglists`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
    },
    data: JSON.parse(req.headers.data),
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

app.get('/get-shopping-list-items.js', (req, res) => {
  let options = {
    method: 'GET',
    url: `${baseUrl}/api/shoppinglistitems?filter%5BshoppingList%5D=${req.headers.id}&include=product`,
    headers: {
      'X-Include': 'totalCount',
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/post-shopping-list-items.js', (req, res) => {
  let options = {
    method: 'POST',
    url: `${baseUrl}/api/shoppinglistitems`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
    },
    data: {
      data: JSON.parse(req.headers.data),
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

app.get('/delete-shopping-list-items.js', (req, res) => {
  let options = {
    method: 'DELETE',
    url: `${baseUrl}/api/shoppinglistitems?filter%5Bid%5D=${req.headers.itemid}&filter%5BshoppingList%5D=${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${req.headers.token}`,
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

app.get('/edit-shopping-list-item.js', (req, res) => {
  let options = {
    method: 'PATCH',
    url: `${baseUrl}/api/shoppinglistitems/${req.headers.id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-include': 'noHateoas',
      Authorization: `Bearer ${req.headers.token}`,
    },
    data: JSON.parse(req.headers.data),
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
