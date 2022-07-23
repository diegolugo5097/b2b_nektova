const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/orders?page%5Bnumber%5D=1&page%5Bsize%5D=-1&sort=id&filter%5BcustomerUser%5D=${req.headers.id}&include=internal_status&fields%5Borderinternalstatuses%5D=name&fields%5Borders%5D=internal_status,totalValue`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  }
  return buildOptions
}
export default options
