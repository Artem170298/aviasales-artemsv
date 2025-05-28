import React from 'react';
import MainBlock from '../main-block';
import Header from '../header';
import TransferFilter from '../transfer-filter';
import Counter from '../counter';

import './app.css';

export default function App() {
  return (
    <div className="app-block">
      <Header />
      <div className="app-container">
        <TransferFilter />
        <MainBlock />
      </div>
      <Counter />

      {/* // counter={store.getState()}
      // inc={inc}
      // dec={dec}
      // rnd={() => {
      //   const payload = Math.floor(Math.random() * 10);
      //   rnd(payload);
      // }} */}
    </div>
  );
}
