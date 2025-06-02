import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './price-filter.css';

export default function PriceFilter() {
  const dispatch = useDispatch();

  return (
    <div className="buttons-div">
      <button className="button-filt">Самый дешевый</button>
      <button className="button-filt">Самый быстрый</button>
      <button className="button-filt">Оптимальный</button>
    </div>
  );
}
