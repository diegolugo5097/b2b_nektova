const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token, data) => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/api/shoppinglists`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    data: JSON.parse(data),
  }
  return buildOptions
}
export default options
