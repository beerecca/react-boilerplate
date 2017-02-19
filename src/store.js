import { createStore, applyMiddleware, compose } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/root-reducer';
import { rootSaga } from './sagas/root-saga';

const composeEnhancers = (process.env.NODE_ENV === 'production') ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
