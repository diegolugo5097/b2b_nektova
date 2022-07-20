import axios from 'axios'

const login = (updateToken, username, password, setErrorReponse) => {
  let result
  axios({
    method: 'GET',
    url: '/login.js',
    headers: {
      username,
      password,
    },
  })
    .then((res) => {
      console.log(res)
      updateToken(JSON.parse(JSON.stringify(res.data.access_token)))
    })
    .catch((err) => setErrorReponse(err))

  return result
}

export default login
