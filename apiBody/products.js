const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/products`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  }
  return buildOptions
}
export default options
