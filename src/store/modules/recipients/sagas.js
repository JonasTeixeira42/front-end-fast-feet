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

    fetchRecipients();

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

    fetchRecipients();

    toast.success('Destinatário atualizado com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteRecipient({ payload }) {
  const { index } = payload;
  try {
    const response = yield call(api.delete, `recipient/${index}`);

    fetchRecipients();

    toast.success(`Destinatário ${response.data.id} removido com sucesso`);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@recipients/FETCH_RECIPIENTS_REQUEST', fetchRecipients),
  takeLatest('@recipients/CREATE_RECIPIENT_REQUEST', createRecipient),
  takeLatest('@recipients/EDIT_RECIPIENT_REQUEST', editRecipient),
  takeLatest('@recipients/DELETE_RECIPIENT_REQUEST', deleteRecipient),
]);
