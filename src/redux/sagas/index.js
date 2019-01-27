import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

//POST AUTOFORM DATA TO DATABASE
function* sendAutoFormSaga(action) {
  console.log('in sendAutoFormSaga', action.payload);
  try {
    yield call(axios.post, '/api/autoform', action.payload);
  }
  catch(error) {
    console.log('error with POST in autoform', error);
  }
}

export default function* rootSaga() {
  yield takeEvery('SEND_AUTO_FORM', sendAutoFormSaga);
  
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
