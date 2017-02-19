import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { actionType } from '../actions/action-type';
import * as actions from '../actions/list-actions';

export function* getList() {
  try {
    const data = ['item1', 'item2']; //Make your fetch call here
    yield call(delay, 1000);

    yield put(actions.setList(data));

  } catch(e) {
    console.error(e);
  }
}

function* listSaga(){
  yield takeEvery(actionType.GET_LIST, getList);
}

export default listSaga;
