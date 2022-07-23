import axios from 'axios'

const fetchApi = (options) => {
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

export default fetchApi
