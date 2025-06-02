/* eslint-disable no-nested-ternary */
import React from 'react';
import './info-block.css';

export default function InfoBlock({ segment }) {
  const { origin, destination, stops, date, duration } = segment;
  const formatTime = (dater) =>
    new Date(dater).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="info-block">
      <div className="date-info">
        <p className="head-info">
          {origin} – {destination}
        </p>
        <p className="body-info">
          {' '}
          {formatTime(date)} - {formatTime(new Date(date).getTime() + duration * 60000)}
        </p>
      </div>
      <div className="time-is-the-way">
        <p className="head-info">В пути</p>
        <p className="body-info">
          {' '}
          {Math.floor(duration / 60)}ч {duration % 60}м
        </p>
      </div>
      <div className="number-of-transfers">
        <p className="head-info">
          {' '}
          {stops.length > 1 ? `${stops.length} ПЕРЕСАДКИ` : stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : '1 ПЕРЕСАДКА'}
        </p>
        <p className="body-info">
          {stops[0] ? stops[0] : ''} {stops[1] ? `, ${stops[1]}` : ''} {stops[2] ? `, ${stops[2]}` : ''}
        </p>
      </div>
    </div>
  );
}
