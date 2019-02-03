import React, { Component } from 'react';

// Creating React's context
export const AppContext = React.createContext();

class Context extends Component {
  state = {};

  render () {
    const context = {
      state: this.state,
    };

    return (<AppContext.Provider value={context}>
      {this.props.children}
    </AppContext.Provider>);
  }
}

export default Context;
