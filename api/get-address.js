import axios from 'axios';

const getAddress = (token, setAddressOptions, userId) => {
  axios({
    method: 'GET',
    url: '/get-address.js',
    headers: {
      token,
      id: userId,
    },
  })
    .then((res) => {
      setAddressOptions(res.data.data);
    })
    .catch((err) => console.log(err));
};
export default getAddress;
