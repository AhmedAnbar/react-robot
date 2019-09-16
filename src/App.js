import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/header/Header';
import CardList from './components/card-list/CardList';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
