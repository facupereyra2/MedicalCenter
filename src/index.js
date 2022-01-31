import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Contact from './pages/Contact'
;
import HistoriaClinica from './pages/HistoriaClinica';
import Profesionals from './pages/Profesionals';


ReactDOM.render(
  <React.StrictMode>
      <Profesionals/>
  </React.StrictMode>,
  document.getElementById('root')
);

