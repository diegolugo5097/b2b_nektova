const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token, email) => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/api/customeruserforgotpassword`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    data: {
      meta: {
        email: email,
      },
    },
  }
  return buildOptions
}
export default options
