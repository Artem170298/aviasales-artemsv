import React from 'react';

import InfoBlock from '../info-block';

import './ticket.css';

export default function Ticket({ ticket }) {
  return (
    <div className="ticket-block">
      <div className="header-ticket">
        <h3 className="price-ticket">{ticket.price.toLocaleString()} ₽ </h3>
        <img className="logo-company" src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier}></img>
      </div>
      {
        ticket.segments.map((segment, index) => {
          return <InfoBlock key={segment.duration} segment={segment} />;
        })
        // <InfoBlock />
      }
    </div>
  );
}
