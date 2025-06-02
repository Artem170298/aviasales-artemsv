import { Checkbox } from 'antd';
import './checkbox-filt.css';

export default function CheckboxFilt({ label, value, checked, indeterminate, onChange, onCheckAllChange }) {
  const handleChange = (e) => {
    if (value === 'all') {
      // Обработка чекбокса "Все"
      onCheckAllChange(e.target.checked);
    } else {
      // Обработка обычных чекбоксов
      onChange(value, e.target.checked);
    }
  };

  return (
    <div style={{ backgroundColor: !checked ? '#FFFFFF' : '#F1FCFF' }} className="checkbox-div">
      <Checkbox checked={checked} onChange={handleChange} indeterminate={indeterminate}>
        {label}
      </Checkbox>
    </div>
  );
}
