import React from 'react';
import firmLogo from './71c173df6bcd457cb80cd1d82aae040e2504746e.png';
import InfoBlock from '../info-block';

import './ticket.css';

export default function Ticket() {
  return (
    <div className="ticket-block">
      <div className="header-ticket">
        <h3 className="price-ticket">13 400 Р</h3>
        <img className="logo-company" src={firmLogo}></img>
      </div>
      <InfoBlock />
    </div>
  );
}
