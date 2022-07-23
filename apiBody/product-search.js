const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token, sku) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/productsearch?filter%5BsearchQuery%5D=sku~%22${sku}%22%20and%20status%20%3D%20%22enabled%22%20and%20inventoryStatus%20%3D%20%22in_stock%22&filter%5Baggregations%5D=inventoryStatus%20count%20inventoryStatusCount`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
      'X-Include': 'noHateoas;totalCount',
    },
  }
  return buildOptions
}
export default options
