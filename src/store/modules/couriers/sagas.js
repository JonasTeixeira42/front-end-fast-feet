/* eslint-disable camelcase */
import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { fetchCouriersSuccess } from './actions';

export function* fetchCouriers() {
  try {
    const response = yield call(api.get, 'courier');

    yield put(fetchCouriersSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao consultar destinatários');
  }
}

export function* fetchFilteredCouriers({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.get, 'courier-filtered', {
      params: { name },
    });

    yield put(fetchCouriersSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao consultar entregadores');
  }
}

export function* createCourier({ payload }) {
  const { name, email, avatar_id } = payload.data;
  try {
    yield call(api.post, 'courier', { name, email, avatar_id });

    fetchCouriers();

    toast.success('Entregador cadastrado com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* editCourier({ payload }) {
  const { name, email, avatar_id, id } = payload.data;

  try {
    yield call(api.put, `courier/${id}`, {
      name: name || undefined,
      email: email || undefined,
      avatar_id: avatar_id || undefined,
    });

    fetchCouriers();

    toast.success('Entregador atualizado com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteCourier({ payload }) {
  const { index } = payload;
  try {
    const response = yield call(api.delete, `courier/${index}`);

    fetchCouriers();

    toast.success(`Entregador ${response.data.id} removido com sucesso`);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@couriers/FETCH_COURIERS_REQUEST', fetchCouriers),
  takeLatest('@couriers/CREATE_COURIER_REQUEST', createCourier),
  takeLatest('@couriers/EDIT_COURIER_REQUEST', editCourier),
  takeLatest('@couriers/DELETE_COURIER_REQUEST', deleteCourier),
  takeLatest(
    '@couriers/FETCH_FILTERED_COURIERS_REQUEST',
    fetchFilteredCouriers
  ),
]);
