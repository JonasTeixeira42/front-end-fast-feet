export function fetchDeliveriesRequest() {
  return {
    type: '@deliveries/FETCH_DELIVERIES_REQUEST',
  };
}

export function fetchFilteredDelivery(product) {
  return {
    type: '@deliveries/FETCH_FILTERED_DELIVERIES_REQUEST',
    payload: {
      product,
    },
  };
}

export function fetchDeliveriesSuccess(deliveries) {
  return {
    type: '@deliveries/FETCH_DELIVERIES_SUCCESS',
    payload: {
      deliveries,
    },
  };
}

export function changeEnabledField(index) {
  return {
    type: '@deliveries/CHANGE_ENABLE_FIELD',
    payload: {
      index,
    },
  };
}

export function deleteDeliveryRequest(index) {
  return {
    type: '@deliveries/DELETE_DELIVERY_REQUEST',
    payload: {
      index,
    },
  };
}

export function deleteDeliverySuccess(index) {
  return {
    type: '@deliveries/DELETE_DELIVERY_SUCCESS',
    payload: {
      index,
    },
  };
}

export function createDeliveryRequest(courier, recipient, product) {
  return {
    type: '@deliveries/CREATE_DELIVERY_REQUEST',
    payload: {
      courier,
      recipient,
      product,
    },
  };
}

export function editDeliveryRequest(courier, recipient, product, id) {
  return {
    type: '@deliveries/EDIT_DELIVERY_REQUEST',
    payload: {
      courier,
      recipient,
      product,
      id,
    },
  };
}
