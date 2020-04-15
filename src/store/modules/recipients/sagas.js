import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { fetchRecipientsSuccess } from './actions';

export function* fetchRecipients() {
  try {
    const response = yield call(api.get, 'recipient');

    yield put(fetchRecipientsSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao consultar destinatários');
  }
}

export default all([
  takeLatest('@recipients/FETCH_RECIPIENTS_REQUEST', fetchRecipients),
]);
