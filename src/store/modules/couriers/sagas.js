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

export function* createRecipient({ payload }) {
  const { name, rua, numero, complemento, estado, cidade, cep } = payload.data;
  try {
    yield call(api.post, 'recipient', {
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });

    fetchCouriers();

    toast.success('Destinatário cadastrado com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* editRecipient({ payload }) {
  const {
    name,
    rua,
    numero,
    complemento,
    estado,
    cidade,
    cep,
    id,
  } = payload.data;

  try {
    yield call(api.put, `recipient/${id}`, {
      name: name || undefined,
      rua: rua || undefined,
      numero: numero || undefined,
      complemento: complemento || undefined,
      estado: estado || undefined,
      cidade: cidade || undefined,
      cep: cep || undefined,
    });

    fetchCouriers();

    toast.success('Destinatário atualizado com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteRecipient({ payload }) {
  const { index } = payload;
  try {
    const response = yield call(api.delete, `recipient/${index}`);

    fetchCouriers();

    toast.success(`Destinatário ${response.data.id} removido com sucesso`);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@couriers/FETCH_COURIERS_REQUEST', fetchCouriers),
]);
