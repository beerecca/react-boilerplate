import React from 'react';
import './style/app.scss';
import './favicon.ico';
import {render} from 'react-dom';
import HomePage from './containers/HomePage/HomePage.js';

render(<HomePage isLoading={true}/>, document.getElementById('app'));
