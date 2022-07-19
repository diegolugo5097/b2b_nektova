import axios from 'axios';

const getCategories = (token, setCategories) => {
  axios({
    method: 'GET',
    url: '/get-categories.js',
    headers: {
      token,
    },
  })
    .then((res) => {
      setCategories(res.data.included);
    })
    .catch((err) => console.log(err));
};
export default getCategories;
