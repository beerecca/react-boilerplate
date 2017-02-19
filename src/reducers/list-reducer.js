import { initialState } from '../state';

export const list = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        isLoading: true
      };
    case 'SET_LIST':
      return {
        ...state,
        list: action.list,
        isLoading: false
      };
    default:
      return state
  }
};

