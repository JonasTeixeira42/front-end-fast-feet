import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { fetchDeliveriesSuccess } from './actions';

export function* fetchDeliveries() {
  try {
    const response = yield call(api.get, 'delivery');

    yield put(fetchDeliveriesSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao consultar encomendas');
  }
}

export default all([
  takeLatest('@deliveries/FETCH_DELIVERIES_REQUEST', fetchDeliveries),
]);
