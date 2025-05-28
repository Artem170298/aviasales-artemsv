import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';

import reducer from './reducer';

const store = configureStore({
  reducer,
});

// const { dispatch } = store;
// const { inc, dec, rnd } = bindActionCreators(
//   // способ привязки сразу нескольких функций
//   actions,
//   dispatch
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <App />{' '}
//     <Counter
//       counter={store.getState()}
//       inc={inc}
//       dec={dec}
//       rnd={() => {
//         const payload = Math.floor(Math.random() * 10);
//         rnd(payload);
//       }}
//     />
//   </div>
// );
// update();
// store.subscribe(update);
