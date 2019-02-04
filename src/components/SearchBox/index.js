import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { AppContext } from '../../Context';

class SearchBox extends Component {
  static contextType = AppContext;

  state = {
    originalWidth: 0,
  };

  constructor (props) {
    super(props);
    this.width = props.width;
    this.placeholderText = props.placeholderText;
    this.onSearch = debounce(this.onSearch.bind(this), 500);
  }

  componentDidMount () {
    this.setState({ originalWidth: this.width });
  }

  onFocus = () => {
    this.setState({ originalWidth: this.width * 2 })
    this.context.show(true);
  };

  // Handling change on input element
  handleChange = (e) => {
    this.onSearch(e.target.value)
  }

  // Method for send petition onSearch
  onSearch = (query = '') => {
    if (query.length > 0) {
      this.context.findJobs(query);
    }
  };

  clickOption = (e, option) => {
    this.context.findJob(option);
    this.context.show(false);
  };

  searchList = () => (
    this.context.state.findedJobs.map((job) =>
      <li key={job.uuid} onClick={(e) => this.clickOption(e, job.uuid)} className="search__item">
        {job.suggestion}
      </li>)
  );

  render () {
    return (<div className="search-box">
      <div className="search__wrapper bg-white flex">
        <input
          style={{width: (this.context.state.show) ? this.state.originalWidth + 'px' : this.width + 'px' }}
          className="search__input rounded p-2"
          type="text"
          placeholder={this.placeholderText}
          onFocus={this.onFocus}
          onChange={this.handleChange} />
        <div className="w-auto flex justify-end items-center p-2">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="search__dropdown" style={{ display: (this.context.state.show) ? 'block' : 'none' }}>
        <nav className="search__nav">
          <ul className="search__list list-reset">
            {this.searchList()}
          </ul>
        </nav>
      </div>
    </div>);
  }
}

export default SearchBox;