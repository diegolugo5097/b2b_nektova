import axios from 'axios';
const oAuthForgot = (setTokenForgot, setErrorForgot) => {
  let result;
  axios({ method: 'GET', url: '/oAuthForgot.js' })
    .then((res) => {
      setTokenForgot(JSON.parse(JSON.stringify(res.data.access_token)));
    })
    .catch((err) => {
      setErrorForgot(err);
    });
  return result;
};
export default oAuthForgot;
