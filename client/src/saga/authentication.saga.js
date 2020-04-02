import { take, takeLatest, put, call} from 'redux-saga/effects';

import { setUserAction, unsetUserAction, authFailedAction } from '../actions/authActions';
import { AUTH_REQUEST, FETCH_USER, LOGOUT_REQUEST } from '../actions/types';
import { authenticateUser, logoutUser, userAuthStatus } from '../services/auth';


//Worker Saga
function* authRequestWorker({type, payload = {}}) {
  const response = yield call(authenticateUser, payload);
  if(response.status === 'success'){
     yield put(setUserAction(response.user));
     yield take(LOGOUT_REQUEST);
     yield call(logoutUser)
     yield put(unsetUserAction());
  }else{
    console.log(response.error)
    yield put(authFailedAction(response.error))
  }
}

//Worker Saga
function* fetchAuthenticatedUser({type, payload = {}}) {
  const response = yield call(userAuthStatus, payload);
  if(response.status === 'success'){
     yield put(setUserAction(response.user));
  }else{
    yield put(unsetUserAction());
  }
}

//Watcher Saga 
export function* watchAuthRequest() {
  yield takeLatest(AUTH_REQUEST, authRequestWorker);
  yield takeLatest(FETCH_USER, fetchAuthenticatedUser);
  //yield takeLatest(SIGNUP_REQUEST, authRequestWorker);
}
