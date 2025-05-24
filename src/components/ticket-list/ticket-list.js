import React from 'react';
import Ticket from '../ticket/ticket';

import './ticket-list.css';

export default function TicketList() {
  return (
    <div>
      <Ticket />
      <button>Показать еще 5 билетов!</button>
    </div>
  );
}
