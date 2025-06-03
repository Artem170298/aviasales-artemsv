import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortByPrice, setSortByDuration, setSortByOptimal } from '../../store/actions';

import './price-filter.css';

export default function PriceFilter() {
  const dispatch = useDispatch();

  return (
    <div className="buttons-div">
      <button className="button-filt" onClick={() => dispatch(setSortByPrice())}>
        Самый дешевый
      </button>
      <button className="button-filt" onClick={() => dispatch(setSortByDuration())}>
        Самый быстрый
      </button>
      <button className="button-filt" onClick={() => dispatch(setSortByOptimal())}>
        Оптимальный
      </button>
    </div>
  );
}
