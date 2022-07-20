import axios from 'axios'

const fetchApi = (methodMiddle, url, data = '', token = '') => {
  let result
  let options = {
    method: 'GET',
    url: '/fetchApi',
    headers: {
      data,
      methodMiddle,
      url,
      token,
    },
  }
  axios(options)
    .then((res) => {
      console.log(res)
      //      setResponse(JSON.parse(JSON.stringify(res)))
    })
    .catch((err) => console.log(err))

  return result
}

export default fetchApi
