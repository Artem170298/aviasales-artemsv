/* eslint-disable no-shadow */
// eslint-disable-next-line default-param-last
import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import reducer from './reducer';
// import { inc, dec, rnd } from './actions';
import * as actions from './actions';

const store = configureStore({
  reducer,
});

const { dispatch } = store;

// const bindActionCreator = //самописная функция
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

// bindActionCreators - функция от redux

const payload = Math.floor(Math.random() * 10);

const { inc, dec, rnd } = bindActionCreators(
  // способ привязки сразу нескольких функций
  actions,
  dispatch
);

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   // способ привязки сразу нескольких функций
//   { incDispatch: inc, decDispatch: dec, rndDispatch: rnd },
//   dispatch
// );
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

store.subscribe(() => {
  console.log(store.getState());
});
// incDispatch();
inc(); // не оригинальные функции а с привязкой к dispatch

// dispatch(inc());
// incDispatch();
inc();
// // dispatch(inc());
// incDispatch();
inc();
// // dispatch(dec());
// decDispatch();
dec();
// // dispatch(rnd(payload));
// rndDispatch(payload);
rnd(payload);
// // dispatch(dec());
// decDispatch();
dec();
