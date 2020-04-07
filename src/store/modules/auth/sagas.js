import { all, takeLatest, call, put } from 'redux-saga/effects';

import { signInSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'session', {
    email,
    password,
  });

  const { token, name } = response.data;

  yield put(signInSuccess(token, name));

  history.push('/delivery');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
