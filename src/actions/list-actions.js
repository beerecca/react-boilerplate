import { actionType } from './action-type';

export const getList = () => ({
  type: actionType.GET_LIST
});

export const setList = (data) => ({
  type: actionType.SET_LIST,
  list: data
});
