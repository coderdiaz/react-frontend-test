import React, { Component, Fragment } from 'react';
import Navigation from '../../components//Navigation';
import { AppContext } from '../../Context';

class Dashboard extends Component {
  static contextType = AppContext;

  render () {
    return (<Fragment>
      <header className="header bg-blue-darkest">
        <div className="container mx-auto">
          <Navigation></Navigation>
        </div>
      </header>
      <main className="main text-center py-6">
        <div className="container">
        <code>Selected Option: {JSON.stringify(this.context.state.lastJobSelected)}</code>
        </div>
      </main>
    </Fragment>)
  }
}

export default Dashboard;