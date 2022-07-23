import axios from 'axios'

const fetchApi = (options) => {
  axios
    .request(options)
    .then((response) => {
      response.status(200).send(response.data)
    })
    .catch((err) => {
      response.status(400).send(err)
    })
}

export default fetchApi
