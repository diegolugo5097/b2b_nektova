import axios from 'axios';

const postOrders = (
  token,
  selectedProducts,
  PONumber,
  setAlert,
  address,
  setOrderId,
  alertError,
) => {
  let data = {
    type: 'orders',
    attributes: {
      poNumber: PONumber,
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
        data: [],
      },
    },
  };

  selectedProducts.map((item, index) => {
    data.relationships.lineItems.data.push({
      type: 'orderlineitems',
      id: `order-line-item-${index}`,
    });
  });

  let included = [
    {
      type: 'orderaddresses',
      id: 'billing1',
      attributes: {
        city: address.attributes.city,
        firstName: address.attributes.firstName,
        label: address.attributes.label,
        lastName: address.attributes.lastName,
        middleName: address.attributes.middleName,
        namePrefix: address.attributes.namePrefix,
        nameSuffix: address.attributes.nameSuffix,
        organization: address.attributes.organization,
        phone: address.attributes.phone,
        postalCode: address.attributes.postalCode,
        street: address.attributes.street,
        street2: address.attributes.street2,
      },
      relationships: {
        country: {
          data: {
            type: 'countries',
            id: address.relationships.country.data.id,
          },
        },
        region: {
          data: {
            type: 'regions',
            id: address.relationships.region.data.id,
          },
        },
      },
    },
    {
      type: 'orderaddresses',
      id: 'shipping1',
      attributes: {
        city: address.attributes.city,
        firstName: address.attributes.firstName,
        label: address.attributes.label,
        lastName: address.attributes.lastName,
        middleName: address.attributes.middleName,
        namePrefix: address.attributes.namePrefix,
        nameSuffix: address.attributes.nameSuffix,
        organization: address.attributes.organization,
        phone: address.attributes.phone,
        postalCode: address.attributes.postalCode,
        street: address.attributes.street,
        street2: address.attributes.street2,
      },
      relationships: {
        country: {
          data: {
            type: 'countries',
            id: address.relationships.country.data.id,
          },
        },
        region: {
          data: {
            type: 'regions',
            id: address.relationships.region.data.id,
          },
        },
      },
    },
  ];
  selectedProducts.map((item, index) => {
    included.push({
      type: 'orderlineitems',
      id: `order-line-item-${index}`,
      attributes: {
        quantity: item.qty,
      },
      relationships: {
        product: {
          data: {
            type: 'products',
            id: item.id,
          },
        },
        productUnit: {
          data: {
            type: 'productunits',
            id: 'item',
          },
        },
      },
    });
  });

  axios({
    method: 'GET',
    url: '/orders.js',
    headers: {
      token,
      data: JSON.stringify(data),
      included: JSON.stringify(included),
    },
  })
    .then((res) => {
      if (res.status) {
        setOrderId(res.data.data.id);
        setAlert(true);
      }
    })
    .catch((err) => alertError(err));
};
export default postOrders;
