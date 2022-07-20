import axios from 'axios';

const getProductSearch = async (token, sku, setSkus) => {
  await axios({
    method: 'GET',
    url: '/product-search.js',
    headers: {
      token: token,
      sku: sku,
    },
  })
    .then((res) => {
      setSkus(res.data.data);
    })
    .catch((err) => console.log(err));
};
export default getProductSearch;
