import { configureStore } from '@reduxjs/toolkit';
import { ticketsReducer } from './reducer';

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export default store;
