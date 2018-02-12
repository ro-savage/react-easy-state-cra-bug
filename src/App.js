import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Stateless from './Stateless'
import Stateful from './Stateful'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Stateless />
          <Stateful />
        </header>
      </div>
    );
  }
}

export default App;
