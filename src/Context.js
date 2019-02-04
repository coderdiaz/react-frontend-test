import React, { Component } from 'react';
import axios from 'axios';

// Creating React's contex
const API_URI = 'https://api.dataatwork.org/v1';
export const AppContext = React.createContext();

class Context extends Component {
  state = {
    findedJobs: [],
    lastJobSelected: {},
    show: false,
  };

  findJobs = async (query = '') => {
    const { data: findedJobs } = await axios.get(`${API_URI}/jobs/autocomplete?contains=${query}`);
    this.setState({ findedJobs });
  };

  findJob = async (id) => {
    const { data: lastJobSelected } = await axios.get(`${API_URI}/jobs/${id}`);
    console.log('SelectedJob =>', lastJobSelected);
    this.setState({ lastJobSelected });
  };

  show = (value) => this.setState({ show: value });

  render () {
    const context = {
      state: this.state,
      findJobs: this.findJobs,
      findJob: this.findJob,
      show: this.show,
    };

    return (<AppContext.Provider value={context}>
      {this.props.children}
    </AppContext.Provider>);
  }
}

export default Context;
