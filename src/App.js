import React from 'react';
import Context from './Context';
import './App.scss';
import Dashboard from './views/Dashboard';

const App = () => {
  return (<Context>
    <Dashboard />
  </Context>);
};

App.contextType = Context;

export default App;
