import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBlock from '../main-block';
import Header from '../header';
import TransferFilter from '../transfer-filter';
import Spinner from '../spinner';

import './app.css';

export default function App() {
  const dispatch = useDispatch();
  const { filteredTickets, loading, error } = useSelector((state) => state.tickets);

  if (loading && filteredTickets.length === 0) return <Spinner />; //---
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="app-block">
      <Header />
      <div className="app-container">
        <TransferFilter />
        <MainBlock />
      </div>
    </div>
  );
}
