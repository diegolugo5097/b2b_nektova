const baseUrl = 'https://b2b.thecornercloud.com'

let options = (id, token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/customeruseraddresses?filter%5BcustomerUser%5D=${id}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  }
  return buildOptions
}
export default options
