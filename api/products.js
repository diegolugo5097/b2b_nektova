import axios from 'axios';

const getProducts = (token, setProducts) => {
  let result;
  axios({
    method: 'GET',
    url: '/products.js',
    headers: {
      token: token,
    },
  })
    .then((res) => {
      setProducts(JSON.parse(JSON.stringify(res.data.data)));
    })
    .catch((err) => console.log(err));

  return result;
};
export default getProducts;
