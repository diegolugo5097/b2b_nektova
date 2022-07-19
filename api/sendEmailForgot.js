import axios from 'axios';

const sendEmailForgot = (token, email, setResponseEmail) => {
  let result;
  axios({
    method: 'GET',
    url: '/sendEmailForgot.js',
    headers: {
      token,
      email,
    },
  })
    .then((res) => {
      setResponseEmail(JSON.parse(JSON.stringify(res.data.data)));
    })
    .catch((err) => console.log(err));
  return result;
};

export default sendEmailForgot;
