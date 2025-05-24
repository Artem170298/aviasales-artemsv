import React from 'react';
import firmLogo from './71c173df6bcd457cb80cd1d82aae040e2504746e.png';

import './ticket.css';

export default function Ticket() {
  return (
    <div>
      <div>
        <h2>13 400 Р</h2>
        <img src={firmLogo}></img>
      </div>
      <div>
        <div>
          <p>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
        <div>
          <p>В пути</p>
          <p>21ч 15м</p>
        </div>
        <div>
          <p>2 пересадки</p>
          <p>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
}
