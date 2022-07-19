import axios from 'axios';

const getPriceProducts = (token, setPrice, id, setProductName) => {
  let result;
  axios({
    method: 'GET',
    url: '/price-products.js',
    headers: {
      token: token,
      id,
    },
  })
    .then((res) => {
      setPrice(res.data.data.attributes.prices);
      setProductName(res.data.data.attributes.name);
    })
    .catch((err) => console.log(err));

  return result;
};
export default getPriceProducts;
