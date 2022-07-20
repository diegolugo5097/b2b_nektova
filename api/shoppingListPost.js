import axios from 'axios';

const shoppingListPost = (token, setResponse) => {
  let data = {
    data: {
      type: 'shoppinglists',
      attributes: {
        name: 'Quick Order First Shopping List',
      },
    },
  };
  axios({
    method: 'GET',
    url: '/shoppingListPost.js',
    headers: {
      data: JSON.stringify(data),
      token,
    },
  })
    .then((res) => {
      setResponse(res);
    })
    .catch((err) => console.log(err));
};

export default shoppingListPost;
