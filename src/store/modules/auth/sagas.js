import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { SESSION } from '~/constants/ApiCalls';
import { signFailure, signInSucess } from './actions';
import { SIGN_IN_REQUEST } from './type';
import { REHYDRATE } from '~/store/type';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, SESSION, {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSucess(token, user));
  } catch (err) {
    toast.error('Falha na autentificação, verifique os seus dados.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
]);
