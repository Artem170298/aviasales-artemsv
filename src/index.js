import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';

import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
