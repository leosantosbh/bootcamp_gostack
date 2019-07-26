import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* addMeetup({ payload }) {
  try {
    const { titulo, descricao, date, local, banner_id } = payload;

    yield call(api.post, 'metts', {
      titulo,
      descricao,
      date,
      local,
      banner_id,
    });

    toast.success('Meetup was created');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Failed. Check your data.');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `metts/${id}`);

    toast.success('Meetup was deleted.');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Delete meetup failed.');
  }
}

export function* editMeetup({ payload }) {
  try {
    const { titulo, descricao, date, local, banner_id, id } = payload;

    yield call(api.put, `metts/${id}`, {
      titulo,
      descricao,
      date,
      local,
      banner_id,
    });

    toast.success('Meetup updated success!');

    history.push(`/details?meet=${id}`);
  } catch (error) {
    toast.error('Update meetup failed.');
  }
}

export default all([
  takeLatest('@meet/ADD_REQUEST', addMeetup),
  takeLatest('@meet/EDIT_REQUEST', editMeetup),
  takeLatest('@meet/CANCEL_REQUEST', cancelMeetup),
]);
