import listSaga from './list-saga';

export function* rootSaga() {
  yield [
    listSaga()
  ]
}
