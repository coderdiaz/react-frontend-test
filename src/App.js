import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.scss';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="header bg-blue-darkest">
          <div className="container mx-auto">
            <Navigation></Navigation>
          </div>
        </header>
        <main className="main"></main>
      </div>
    );
  }
}

export default App;
