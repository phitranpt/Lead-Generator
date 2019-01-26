import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* sendAutoFormSaga(action) {
  console.log('in sendAutoFormSaga', action.payload);
}

export default function* rootSaga() {
  yield takeEvery('SEND_AUTO_FORM', sendAutoFormSaga);
  
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
