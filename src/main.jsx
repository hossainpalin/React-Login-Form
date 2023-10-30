import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-login-form/'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
