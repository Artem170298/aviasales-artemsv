import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilters } from '../../store/actions';
import { applyFilters } from '../../store/thunks';
import CheckboxFilt from '../checkbox-filt';
import './transfer-filter.css';

const options = [
  { label: 'Все', value: 'all' },
  { label: 'Без пересадок', value: '0' },
  { label: '1 пересадка', value: '1' },
  { label: '2 пересадки', value: '2' },
  { label: '3 пересадки', value: '3' },
];

const allValues = options.map((opt) => opt.value);
const regularValues = options.filter((opt) => opt.value !== 'all').map((opt) => opt.value);

export default function TransferFilter() {
  const dispatch = useDispatch();
  const { activeFilters } = useSelector((state) => state.tickets);

  const allRegularChecked = regularValues.every((val) => activeFilters.includes(val));
  const isAllChecked = activeFilters.includes('all') || allRegularChecked;
  const isIndeterminate = activeFilters.length > 0 && !allRegularChecked && !isAllChecked;

  const updateFilters = (newCheckedValues) => {
    dispatch(setActiveFilters(newCheckedValues));
    dispatch(applyFilters());
  };

  const handleChange = (value, isChecked) => {
    let newCheckedValues;

    if (isChecked) {
      newCheckedValues = [...activeFilters, value];
      if (regularValues.every((val) => newCheckedValues.includes(val))) {
        newCheckedValues = allValues;
      }
    } else {
      newCheckedValues = activeFilters.filter((val) => val !== value && val !== 'all');
    }

    updateFilters(newCheckedValues);
  };

  const handleCheckAllChange = (isChecked) => {
    updateFilters(isChecked ? allValues : []);
  };

  return (
    <form className="filter-transfer">
      <h4 className="filter-transfer-title">Количество пересадок</h4>
      {options.map((option) => (
        <CheckboxFilt
          key={option.value}
          label={option.label}
          value={option.value}
          checked={activeFilters.includes(option.value)}
          // indeterminate={option.value === 'all' ? isIndeterminate : false}
          onChange={handleChange}
          onCheckAllChange={handleCheckAllChange}
        />
      ))}
    </form>
  );
}
