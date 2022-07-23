const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/orders/${id}?include=lineItems&fields%5Borders%5D=identifier,poNumber,lineItems,customerNotes,subtotalValue,createdAt,paymentStatus,totalValue,paymentTerm,shipUntil,shipUntil&fields%5Borderlineitems%5D=productName,productSku,quantity,price,productUnitCode`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  }
  return buildOptions
}
export default options
