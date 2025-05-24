import React from 'react';
import TicketList from '../ticket-list';
import PriceFilter from '../price-filter';

import './main-block.css';

export default function MainBlock() {
  return (
    <div>
      <PriceFilter />
      <TicketList />
    </div>
  );
}
