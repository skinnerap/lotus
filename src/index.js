import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/ui/Layout';

ReactDOM.render(
  
    <BrowserRouter>
    <React.StrictMode>
      <Layout />
      </React.StrictMode>
    </BrowserRouter>
 ,
  document.getElementById('root')
);