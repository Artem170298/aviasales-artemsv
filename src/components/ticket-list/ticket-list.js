import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/thunks';
import Ticket from '../ticket/ticket';
import './ticket-list.css';
import store from '../../store/store';

export default function TicketList() {
  const [N, setN] = useState(5);
  const dispatch = useDispatch();
  const { filteredTickets, loading, error, isComplete } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading && !filteredTickets.length) return <div>Загрузка билетов...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  const renderTickets = filteredTickets.slice(0, N); // Берёт первые N элементов
  return (
    <div className="ticket-list">
      {renderTickets.map((ticket, index) => (
        <Ticket key={`${ticket.price}-${index}`} ticket={ticket} />
      ))}
      {!isComplete ? <div className="load-more-tickets">Загружаем еще билеты...</div> : null}
      {/* {!loading && isComplete && <div>Все билеты загружены</div>} */}
      <button
        className="show-more-button"
        onClick={() => {
          setN(N + 5);
          console.log(store.getState());
        }}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
}
