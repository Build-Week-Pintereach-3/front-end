import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ThemeObject from './theme';


ReactDOM.render(

    <ThemeProvider theme={ThemeObject}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>    ,
  document.getElementById('root')
);
