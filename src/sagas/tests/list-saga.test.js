import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getList } from '../list-saga';
import * as actions from '../../actions/list-actions';

describe('getList Saga', function() {
  it('runs getList Saga', function() {
    const gen = getList();
    expect(gen.next().value).toEqual(call(delay, 1000));
    expect(gen.next().value).toEqual(put(actions.setList(['item1', 'item2'])));
  });
});
