const { default: axios } = require('axios');

const resetPassword = (
  token,
  tokenConfirm,
  password,
  setResponseReset,
  setErrorReset,
) => {
  let result;
  axios({
    method: 'GET',
    url: '/resetPassword.js',
    headers: {
      token,
      reset: tokenConfirm,
      password,
    },
  })
    .then((res) => {
      setResponseReset(true);
    })
    .catch((err) => setErrorReset(err));
  return result;
};

export default resetPassword;
