import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { Home } from './pages/Home';
//import { Home2 } from './pages/Home2';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
