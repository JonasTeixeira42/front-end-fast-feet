export function fetchDeliveriesRequest() {
  return {
    type: '@deliveries/FETCH_DELIVERIES_REQUEST',
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
