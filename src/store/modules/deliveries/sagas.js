import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { fetchDeliveriesSuccess, deleteDeliverySuccess } from './actions';

export function* fetchDeliveries() {
  try {
    const response = yield call(api.get, 'delivery');

    yield put(fetchDeliveriesSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao consultar encomendas');
  }
}

export function* deleteDelivery({ payload }) {
  const { index } = payload;
  try {
    const response = yield call(api.delete, `delivery/${index}`);

    yield put(deleteDeliverySuccess(index));

    toast.success(`Encomenda ${response.data.id} cancelada com sucesso`);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* createDelivery({ payload }) {
  const { courier, recipient, product } = payload;

  try {
    yield call(api.post, 'delivery', {
      recipient_id: recipient,
      deliveryman_id: courier,
      product,
    });

    fetchDeliveries();

    toast.success('Encomenda cadastrada com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* editDelivery({ payload }) {
  const { courier, recipient, product, id } = payload;

  const delivery = {
    deliveryman_id: courier || undefined,
    recipient_id: recipient || undefined,
    product,
  };

  try {
    yield call(api.put, `delivery/${id}`, delivery);

    fetchDeliveries();

    toast.success('Encomenda editada com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@deliveries/FETCH_DELIVERIES_REQUEST', fetchDeliveries),
  takeLatest('@deliveries/DELETE_DELIVERY_REQUEST', deleteDelivery),
  takeLatest('@deliveries/CREATE_DELIVERY_REQUEST', createDelivery),
  takeLatest('@deliveries/EDIT_DELIVERY_REQUEST', editDelivery),
]);
