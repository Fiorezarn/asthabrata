import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';
import { Analytics } from '@vercel/analytics/next';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <Provider store={store}>
   <Router />
   <Analytics />
  </Provider>
 </React.StrictMode>
);
