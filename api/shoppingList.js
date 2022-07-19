import axios from 'axios';

const shoppingList = (token, setResponse, id) => {
  axios({
    method: 'GET',
    url: '/shoppingList.js',
    headers: {
      token,
      id,
    },
  })
    .then((res) => {
      setResponse(res);
    })
    .catch((err) => console.log(err));
};

export default shoppingList;
