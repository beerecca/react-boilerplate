import { list } from '../list-reducer'
import { actionType } from '../../actions/action-type';
import { initialState } from '../../state';

describe('list reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    expect(list(undefined, action)).toEqual(initialState);
  });

  it('should handle GET_LIST', () => {
    const action = {type: actionType.GET_LIST};
    expect(list(initialState, action)).toEqual({isLoading: true, list: []});
  });

  it('should handle SET_LIST', () => {
    const action = {type: actionType.SET_LIST, list: ['item1']};
    expect(list(initialState, action)).toEqual({isLoading: false, list: action.list});
  });
});
