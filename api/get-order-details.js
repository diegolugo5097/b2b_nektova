import axios from 'axios';

const getOrderDetails = (token, id, setOrderDetails) => {
  let result;
  axios({
    method: 'GET',
    url: '/get-order-details.js',
    headers: {
      token,
      id,
    },
  })
    .then((res) => {
      setOrderDetails(res.data);
    })
    .catch((err) => console.log(err));

  return result;
};
export default getOrderDetails;
