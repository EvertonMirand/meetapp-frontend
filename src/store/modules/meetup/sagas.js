import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  createMeetupFailure,
  createMeetupSuccess,
  updateMeetupSuccess,
  updateMeetupFailure,
  cancelMeetupSuccess,
  cancelMeetupFailure,
} from './actions';
import api from '~/services/api';
import {
  CREATE_MEETUP_REQUEST,
  UPDATE_MEETUP_REQUEST,
  CANCEL_MEETUP_REQUEST,
} from './types';
import history from '~/services/history';

export function* createMeetup({ payload }) {
  try {
    const { meetup } = payload;

    yield call(api.post, 'meetups', meetup);

    toast.success('Meetup cadastrado com sucesso');

    yield put(createMeetupSuccess());

    history.push('/');
  } catch (err) {
    toast.error('Falha ao criar meetup.');
    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { meetup, id } = payload;

    yield call(api.put, `meetups/${id}`, meetup);

    toast.success('Meetup atualizado com sucesso');

    yield put(updateMeetupSuccess());

    history.push('/');
  } catch (err) {
    toast.error('Falha ao atualizar meetup.', err.message);
    yield put(updateMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    toast.success('Meetup cancelado com sucesso');

    yield put(cancelMeetupSuccess());

    history.push('/');
  } catch (err) {
    toast.error('Falha ao cancelar meetup.', err.message);
    yield put(cancelMeetupFailure());
  }
}

export default all([
  takeLatest(CREATE_MEETUP_REQUEST, createMeetup),
  takeLatest(UPDATE_MEETUP_REQUEST, updateMeetup),
  takeLatest(CANCEL_MEETUP_REQUEST, cancelMeetup),
]);
