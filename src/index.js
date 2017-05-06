import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';

import Home from './components/home';
import Add from './components/add';
import reducers from './reducers';

import '../style/main.scss'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={ browserHistory }>
      <Route path='/' component={ Home }/>
      <Route path='/add' component={ Add }/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
