import React from 'react';
import MainBlock from '../main-block';
import Header from '../header';
import TransferFilter from '../transfer-filter';

import './app.css';

export default function App() {
  return (
    <div className="app-block">
      <Header />
      <div className="app-container">
        <TransferFilter />
        <MainBlock />
      </div>
    </div>
  );
}
