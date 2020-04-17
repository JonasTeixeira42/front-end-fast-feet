export function fetchRecipientsRequest() {
  return {
    type: '@recipients/FETCH_RECIPIENTS_REQUEST',
  };
}

export function fetchFilteredRecipient(name) {
  return {
    type: '@recipients/FETCH_FILTERED_RECIPIENTS_REQUEST',
    payload: {
      name,
    },
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

export function createRecipientRequest(data) {
  return {
    type: '@recipients/CREATE_RECIPIENT_REQUEST',
    payload: { data },
  };
}

export function editRecipientRequest(data) {
  return {
    type: '@recipients/EDIT_RECIPIENT_REQUEST',
    payload: { data },
  };
}

export function deleteRecipientRequest(index) {
  return {
    type: '@recipients/DELETE_RECIPIENT_REQUEST',
    payload: {
      index,
    },
  };
}
