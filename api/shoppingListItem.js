import axios from 'axios';

const postQuote = (token, selectedProducts) => {
  let rfqProducts = selectedProducts.map((item) => {
    return { type: 'rfqproducts', id: item.id };
  });

  let date = String(new Date().getTime());
  let i = 0;
  let out = '';

  for (i = 0; i < date.length; i += 5) {
    out += Number(date.substr(i, 5)).toString(31);
  }

  let data = {
    type: 'rfqs',
    attributes: {
      firstName: 'Moshe',
      lastName: 'Cohen',
      email: 'mosheCohen@test.com',
      phone: '2-(999)507-4625',
      company: 'Centidel',
      role: 'senior manager',
      note: 'Pellentesque at nulla.',
      poNumber: `${out.toUpperCase()}`,
      shipUntil: '2017-09-02',
    },
    relationships: {
      requestProducts: {
        data: rfqProducts,
      },
      customerUser: {
        data: {
          type: 'customerusers',
          id: '5',
        },
      },
      customer: {
        data: {
          type: 'customers',
          id: '2',
        },
      },
    },
  };
  axios({
    method: 'GET',
    url: '/postQuote.js',
    headers: {
      data: JSON.stringify(data),
      token,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default postQuote;
