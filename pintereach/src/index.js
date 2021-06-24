import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ThemeObject from './theme';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {appReducer} from './reducers/reducer'
import thunk from 'redux-thunk';

const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <ThemeProvider theme={ThemeObject}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>    
  </Provider>,
  document.getElementById('root')
);
