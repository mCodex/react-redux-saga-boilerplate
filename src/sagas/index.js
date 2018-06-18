import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
  ]);
}
