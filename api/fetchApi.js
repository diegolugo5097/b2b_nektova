import axios from 'axios'

const fetchApi = (options) => {
  axios
    .request(options)
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(400).send(err)
    })
}

export default fetchApi
