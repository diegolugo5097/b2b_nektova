const baseUrl = 'https://b2b.thecornercloud.com'

let options = (email, token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/customerusers?filter[email]=${email}`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
    },
  }
  return buildOptions
}
export default options
