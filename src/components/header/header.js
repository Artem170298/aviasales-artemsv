import React from 'react';
import logo from './Logo.png';

import './header.css';

export default function Header() {
  return (
    <div className="header">
      <img src={logo}></img>
    </div>
  );
}
