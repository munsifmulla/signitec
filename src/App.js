import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/style.scss';
import Inventory from './components/inventory';
import BuySell from './components/buySell'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Inventory />
      <BuySell />
      </div>
    );
  }
}

export default App; 
