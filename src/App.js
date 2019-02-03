import React from 'react';
import Navigation from './components/Navigation';
import Context from './Context';
import './App.scss';

const App = () => {
  return (<Context>
    <header className="header bg-blue-darkest">
      <div className="container mx-auto">
        <Navigation></Navigation>
      </div>
    </header>
    <main className="main"></main>
  </Context>);
}

export default App;
