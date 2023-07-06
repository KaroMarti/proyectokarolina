import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='karodev.us.auth0.com'
    clientId='QmuHGrmQtygTaAYF8Xjxc1Np0tvvpfci'
    redirectUri={window.location.origin}>

    <App />
    </Auth0Provider>

  </React.StrictMode>
);

reportWebVitals();
