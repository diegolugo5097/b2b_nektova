const baseUrl = 'https://b2b.thecornercloud.com'

let options = (token) => {
  let buildOptions = {
    method: 'GET',
    url: `${baseUrl}/api/mastercatalogtree?include=category&fields%5Bmastercatalogcategories%5D=title&fields%5Bmastercatalogtree%5D=order,category`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  }
  return buildOptions
}
export default options
