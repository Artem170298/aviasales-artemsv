import React from 'react';
import Ticket from '../ticket/ticket';

import './ticket-list.css';

export default function TicketList() {
  return (
    <div className="ticket-list">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className="show-more-button">Показать еще 5 билетов!</button>
    </div>
  );
}
