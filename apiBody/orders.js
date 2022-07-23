const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token, data, included) => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/api/orders`,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    data: {
      data: JSON.parse(data),
      included: JSON.parse(included),
    },
  }
  return buildOptions
}
export default options
