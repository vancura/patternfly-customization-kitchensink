import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/index';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
