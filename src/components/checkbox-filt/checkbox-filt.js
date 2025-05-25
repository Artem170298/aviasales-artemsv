import { useState } from 'react';
import { Checkbox } from 'antd';
import './checkbox-filt.css';

export default function CheckboxFilt({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ backgroundColor: !isChecked ? ' #FFFFFF' : '#F1FCFF' }} className="checkbox-div">
      <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}>
        {label}
      </Checkbox>
    </div>
  );
}
