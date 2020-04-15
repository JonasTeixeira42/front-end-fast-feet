import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { fetchProblemsDeliveriesSuccess } from './actions';

export function* fetchProblemDeliveries() {
  try {
    const response = yield call(api.get, 'delivery/problems');

    yield put(fetchProblemsDeliveriesSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao consultar problemas');
  }
}

export function* deleteDelivery({ payload }) {
  const { index } = payload;
  try {
    const response = yield call(api.delete, `delivery/${index}`);

    fetchProblemDeliveries();

    toast.success(`Encomenda ${response.data.id} cancelada com sucesso`);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest(
    '@problems/FETCH_PROBLEMS_DELIVERIES_REQUEST',
    fetchProblemDeliveries
  ),
  takeLatest('@deliveries/DELETE_DELIVERY_REQUEST', deleteDelivery),
]);
