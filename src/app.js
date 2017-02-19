import React from 'react';
//Using hashHistory instead of browserHistory so we don't need a server to redirect everything to index.html
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from './store';
import './style/app.scss';
import './favicon.ico';

import HomePage from './containers/HomePage/HomePage.js';
import OtherPage from './containers/OtherPage/OtherPage.js';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={HomePage}/>
        <Route path='/other' component={OtherPage}/>
        <Route path='*' component={HomePage}/>
      </Router>
    </Provider>
  )
};

render(<App />, document.getElementById('app'));
