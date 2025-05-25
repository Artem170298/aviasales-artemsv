import React, { useState } from 'react';
import './transfer-filter.css';
import { Checkbox } from 'antd';
import CheckboxFilt from '../checkbox-filt';

const options = [
  { label: 'Все', value: 'All' },
  { label: 'Без пересадок', value: 'No transfer' },
  { label: '1 пересадка', value: 'One transfer' },
  { label: '2 пересадки', value: 'Two transfer' },
  { label: '3 пересадки', value: 'Three transfer' },
];

export default function TransferFilter() {
  const onChanges = (checkedValues) => {
    console.log('Выбрано:', checkedValues);
  };

  const checkboxs = options.map((el) => {
    return <CheckboxFilt label={el.label} key={el.value} />;
  });
  return (
    <form className="filter-transfer">
      <h4 className="filter-transfer-title">Количество пересадок</h4>
      {checkboxs}
    </form>
  );
}
