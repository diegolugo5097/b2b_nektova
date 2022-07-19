import axios from 'axios';

const getOrdersHistory = (token, userId, setOrders) => {
  axios({
    method: 'GET',
    url: '/get-orders.js',
    headers: {
      token,
      id: userId,
    },
  })
    .then((res) => {
      setOrders(res.data.data);
    })
    .catch((err) => console.log(err));
};
export default getOrdersHistory;
