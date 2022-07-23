const baseUrl = 'https://b2b.thecornercloud.com'

let options = (username, password) => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/oauth2-token`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    data: {
      grant_type: 'password',
      client_id: 'dtGgEgUWUm5XImbmBcgCNmHL-n6pAhIh',
      client_secret:
        'LFZzIRsDXgsqJhYK8FDNKiXs3j7QMBRvrh5zsDVj83t5veIb2ac_IbXze7aZSUl4XNQ39d2sAasKSbzcpErnUo',
      username: username,
      password: password,
    },
  }
  return buildOptions
}
export default options