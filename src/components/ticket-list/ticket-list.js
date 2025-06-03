/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import Spinner from '../spinner';
import { fetchTickets } from '../../store/thunks';
import Ticket from '../ticket/ticket';
import './ticket-list.css';

export default function TicketList() {
  const [N, setN] = useState(5);
  const dispatch = useDispatch();
  const { filteredTickets, loading, error, isComplete, sortBy } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading && !filteredTickets.length) return <div>Загрузка билетов...</div>; //------------------
  if (error) return <div>Ошибка: {error}</div>;

  function sortTickets(tickets, sortByy = 'optimal', order = 'asc') {
    const sortedTickets = [...tickets];

    if (sortByy === 'optimal') {
      return sortedTickets;
    }

    sortedTickets.sort((a, b) => {
      let valueA;
      let valueB;

      if (sortByy === 'price') {
        // Сортировка по цене
        valueA = a.price;
        valueB = b.price;
      } else if (sortByy === 'duration') {
        // Сортировка по длительности перелета
        valueA = a.segments[0].duration;
        valueB = b.segments[0].duration;
      }

      // Определяем порядок сортировки
      if (order === 'asc') {
        return valueA - valueB;
      }
      return valueB - valueA;
    });

    return sortedTickets;
  }

  const filtAndSortTickets = sortTickets(filteredTickets, sortBy, 'asc');

  const renderTickets = filtAndSortTickets.slice(0, N); // Берёт первые N элементов
  return (
    <div className="ticket-list">
      {renderTickets.map((ticket, index) => (
        <Ticket key={`${ticket.price}-${index}`} ticket={ticket} />
      ))}
      {!isComplete ? (
        <div className="load-more-tickets">
          Загружаем еще билеты
          <Spin indicator={<LoadingOutlined spin />} />
        </div>
      ) : null}

      <button
        className="show-more-button"
        onClick={() => {
          setN(N + 5);
        }}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
}
