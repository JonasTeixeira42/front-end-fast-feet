export function fetchProblemsDeliveriesRequest() {
  return {
    type: '@problems/FETCH_PROBLEMS_DELIVERIES_REQUEST',
  };
}

export function fetchProblemsDeliveriesSuccess(problems) {
  return {
    type: '@problems/FETCH_PROBLEMS_DELIVERIES_SUCCESS',
    payload: {
      problems,
    },
  };
}

export function changeEnabledField(index) {
  return {
    type: '@problems/CHANGE_ENABLE_FIELD',
    payload: {
      index,
    },
  };
}
