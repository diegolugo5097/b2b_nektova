const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token, reset, password) => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/api/customeruserresetpassword`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    data: {
      meta: {
        token: reset,
        password: password,
      },
    },
  }
  return buildOptions
}
export default options
