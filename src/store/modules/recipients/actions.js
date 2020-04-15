export function fetchRecipientsRequest() {
  return {
    type: '@recipients/FETCH_RECIPIENTS_REQUEST',
  };
}

export function fetchRecipientsSuccess(recipients) {
  return {
    type: '@recipients/FETCH_RECIPIENTS_SUCCESS',
    payload: { recipients },
  };
}

export function changeEnabledField(index) {
  return {
    type: '@recipients/CHANGE_ENABLE_FIELD',
    payload: {
      index,
    },
  };
}
