import { combineReducers } from 'redux'
import { list } from './list-reducer'

export const rootReducer = combineReducers({
  app: list
});

