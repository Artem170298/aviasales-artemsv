import React from 'react';
import './info-block.css';

export default function InfoBlock() {
  return (
    <div className="info-block">
      <div className="date-info">
        <p className="head-info">MOW – HKT</p>
        <p className="body-info">10:45 – 08:00</p>
      </div>
      <div className="time-is-the-way">
        <p className="head-info">В пути</p>
        <p className="body-info">21ч 15м</p>
      </div>
      <div className="number-of-transfers">
        <p className="head-info">2 пересадки</p>
        <p className="body-info">HKG, JNB</p>
      </div>
    </div>
  );
}
