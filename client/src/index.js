import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Home from './components/home';
import Add from './components/add';
import reducers from './reducers';

import '../style/main.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunkMiddleware))(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={ hashHistory }>
      <Route path='/' component={ Home }/>
      <Route path='/add' component={ Add }/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
