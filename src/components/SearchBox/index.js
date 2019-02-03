import React, { Component } from 'react';
import debounce from 'lodash/debounce';

class SearchBox extends Component {
  state = {
    originalWidth: 0,
    toggle: false,
  };

  constructor (props) {
    super(props);
    this.width = props.width;
    this.toggle = props.toggle ? props.toggle : false;
    this.placeholderText = props.placeholderText;
    this.onSearch = debounce(this.onSearch.bind(this), 500);
  }

  componentDidMount () {
    this.setState({ originalWidth: this.width });
  }

  onFocus = () => this.setState({ originalWidth: this.width * 2, toggle: true });
  deFocus = () => this.setState({ originalWidth: this.width, toggle: false });

  // Handling change on input element
  handleChange = (e) => {
    this.onSearch(e.target.value)
  }

  // Method for send petition onSearch
  onSearch = (value) => {
    if (value.length > 0) {
      this.setState({ toggle: true });
      // TODO: Make petition for search Jobs based on input text value
    }
  };

  render () {
    return (<div className="search-box">
      <div className="search__wrapper bg-white flex">
        <input
          style={{width: this.state.originalWidth + 'px'}}
          className="search__input rounded p-2"
          type="text"
          placeholder={this.placeholderText}
          onFocus={this.onFocus}
          onChange={this.handleChange}
          onBlur={this.deFocus} />
        <div className="w-auto flex justify-end items-center p-2">
          <i className="fas fa-search"></i>
        </div>
      </div>
      { (this.state.toggle) ? <div className="search__dropdown">
        <nav className="search__nav">
          <ul className="search__list list-reset">
            <li className="search__item">Job Name</li>
            <li className="search__item">Job Name</li>
            <li className="search__item">Job Name</li>
          </ul>
        </nav>
      </div> : null }
    </div>);
  }
}

export default SearchBox;