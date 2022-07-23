const baseUrl = 'https://b2b.thecornercloud.com'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkdEdnRWdVV1VtNVhJbWJtQmNnQ05tSEwtbjZwQWhJaCIsImp0aSI6IjRiMzBhMTI2MTRjNzk0ZjgyMGIyZGI2ZjM2MDAwMzFhNGFkM2Q1Njc1M2ZkNTA4ZDQyMjA0ZWU2ZTcxMjYzMzMwODEzNGRmMzM4NWQ2ODQ5IiwiaWF0IjoxNjU4NjEwNjQzLjgwMzQzNiwibmJmIjoxNjU4NjEwNjQzLjgwMzQzOSwiZXhwIjoxNjc2NzU0NjQxLjM2MDM2LCJzdWIiOiJjdXN0b21lckBleGFtcGxlLmNvbSIsInNjb3BlcyI6W119.WM6Irq4s-diEyR_zC7GWLXF0SCYYezi0gM7SctaJQAfR_NHUpVWieda_RnicdRw9FBCx0VZdhpj2veSLbyj7Ov5HpD9ADtE6kzn2_GSrM6DCdzKSUPn6pVuUcXTVJygfPDzyYYDwU_3T0z4l6QELePsiVoTMWKEIY8hHYO21zxmzn7WSPTUpHt1V5tOAmLo1bESxgnLnRJqvHASIZaPzsP8B03BHQJljOI88z_0lJJf_0xHqrU3PMBDUDMhvyEH_2Lp7g1AiuQum88Q5VbAeizxeb4ipESksPKaMD54UegeX3BgO2kZ2Ik8MeHGuEUMjQFtvyHna1PDucpaV4VbSKg'

let options = (username, password) => {
  let buildOptions = {
    method: 'POST',
    url: `${baseUrl}/api/orders`,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    data: {
      data: {
        type: 'orders',
        attributes: {
          poNumber: 'TeST1234',
        },
        relationships: {
          billingAddress: {
            data: {
              type: 'orderaddresses',
              id: 'billing1',
            },
          },
          shippingAddress: {
            data: {
              type: 'orderaddresses',
              id: 'shipping1',
            },
          },
          lineItems: {
            data: [
              {
                type: 'orderlineitems',
                id: '1',
              },
            ],
          },
        },
      },
      included: [
        {
          type: 'orderaddresses',
          id: 'billing1',
          attributes: {
            city: 'Romney',
            firstName: 'Lois',
            label: 'Optional',
            lastName: 'Lesssard',
            middleName: null,
            namePrefix: null,
            nameSuffix: null,
            organization: null,
            phone: null,
            postalCode: '47981',
            street: '34500 Capitol Avenue',
            street2: null,
          },
          relationships: {
            country: {
              data: {
                type: 'countries',
                id: 'US',
              },
            },
            region: {
              data: {
                type: 'regions',
                id: 'US-NY',
              },
            },
          },
        },
        {
          type: 'orderaddresses',
          id: 'shipping1',
          attributes: {
            city: 'Romney',
            firstName: 'Lois',
            label: 'Optional',
            lastName: 'Lesssard',
            middleName: null,
            namePrefix: null,
            nameSuffix: null,
            organization: null,
            phone: null,
            postalCode: '47981',
            street: '34500 Capitol Avenue',
            street2: null,
          },
          relationships: {
            country: {
              data: {
                type: 'countries',
                id: 'US',
              },
            },
            region: {
              data: {
                type: 'regions',
                id: 'US-NY',
              },
            },
          },
        },
        {
          type: 'orderlineitems',
          id: '1',
          attributes: {
            quantity: 1,
          },
          relationships: {
            product: {
              data: {
                type: 'products',
                id: '1',
              },
            },
            productUnit: {
              data: {
                type: 'productunits',
                id: 'item',
              },
            },
          },
        },
      ],
    },
  }
  return buildOptions
}
export default options
