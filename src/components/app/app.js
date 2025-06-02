import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBlock from '../main-block';
import Header from '../header';
import TransferFilter from '../transfer-filter';

import './app.css';

export default function App() {
  const dispatch = useDispatch();
  const { filteredTickets, loading, error } = useSelector((state) => state.tickets);

  // useEffect(() => {
  //   dispatch(fetchTickets());
  // }, [dispatch]);

  if (loading && filteredTickets.length === 0) return <div>Загрузка...</div>;
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
