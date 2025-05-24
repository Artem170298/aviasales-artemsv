import React from 'react';
import './transfer-filter.css';

import { Checkbox } from 'antd';

const onChange = (e) => {
  e.preventDefault();
  console.log(`checked = ${e.target.checked}`);
};

export default function TransferFilter() {
  return (
    <form className="filter-transfer">
      <h4>Количество пересадок</h4>

      <Checkbox onChange={onChange}>Все</Checkbox>
      <Checkbox onChange={onChange}>Без пересадок</Checkbox>
      <Checkbox onChange={onChange}>1 пересадка</Checkbox>
      <Checkbox onChange={onChange}>2 пересадки</Checkbox>
      <Checkbox onChange={onChange}>3 пересадки</Checkbox>
    </form>
  );
}
