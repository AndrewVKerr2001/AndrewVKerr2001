import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/index.tsx';
import { HashRouter } from 'react-router-dom';
import RootLayout from './router.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Header/>
      <RootLayout/>
    </HashRouter>     
  </React.StrictMode>
);