const baseUrl = 'https://b2b.thecornercloud.com'

let options = () => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/oauth2-token`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      grant_type: 'client_credentials',
      client_id: '_Raz6h0w3YqlpwnqOqVJNXZv5eWtTOL8',
      client_secret:
        'xPeyhOTUF2M0QqO8k8UDCOGS3-RfDhoUJjEVg8Pmtk_VYSGmNHLNASWh6Iu0xjUb30FgLSma58X4jEMgYX66Uw',
    },
  }
  return buildOptions
}
export default options
