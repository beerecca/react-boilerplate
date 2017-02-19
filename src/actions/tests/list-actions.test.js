import * as actions from '../list-actions';
import { actionType } from '../action-type';

describe('actions', () => {
  it('should create an action to set the list', () => {
    const list = ['item1', 'item2'];
    const expectedAction = {
      type: actionType.SET_LIST,
      list
    };
    expect(actions.setList(list)).toEqual(expectedAction);
  });
});
