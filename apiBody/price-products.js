const baseUrl = 'https://b2b.thecornercloud.com'

let options = (id, token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/products/${id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  }
  return buildOptions
}
export default options
