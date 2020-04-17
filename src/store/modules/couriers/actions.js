export function fetchCouriersRequest() {
  return {
    type: '@couriers/FETCH_COURIERS_REQUEST',
  };
}

export function fetchFilteredCourier(name) {
  return {
    type: '@couriers/FETCH_FILTERED_COURIERS_REQUEST',
    payload: {
      name,
    },
  };
}

export function fetchCouriersSuccess(couriers) {
  return {
    type: '@couriers/FETCH_COURIERS_SUCCESS',
    payload: { couriers },
  };
}

export function changeEnabledField(index) {
  return {
    type: '@couriers/CHANGE_ENABLE_FIELD',
    payload: {
      index,
    },
  };
}

export function createCourierRequest(data) {
  return {
    type: '@couriers/CREATE_COURIER_REQUEST',
    payload: { data },
  };
}

export function editCourierRequest(data) {
  return {
    type: '@couriers/EDIT_COURIER_REQUEST',
    payload: { data },
  };
}

export function deleteCourierRequest(index) {
  return {
    type: '@couriers/DELETE_COURIER_REQUEST',
    payload: {
      index,
    },
  };
}
