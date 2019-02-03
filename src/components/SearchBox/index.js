import React, { Component } from 'react';

class SearchBox extends Component {
  state = {
    originalWidth: 0,
  };

  constructor (props) {
    super(props);
    this.width = props.width;
    this.placeholderText = props.placeholderText;
  }

  componentDidMount () {
    this.setState({ originalWidth: this.width });
  }

  onFocus = () => this.setState({ originalWidth: this.width * 2 });
  deFocus = () => this.setState({ originalWidth: this.width });

  render () {
    return (<div className="search-box bg-white flex">
      <input
        style={{width: this.state.originalWidth + 'px'}}
        className="search__input rounded p-2"
        type="text"
        placeholder={this.placeholderText}
        onFocus={this.onFocus}
        onBlur={this.deFocus} />
      <button className="w-auto flex justify-end items-center p-2">
        <i className="fas fa-search"></i>
      </button>
    </div>);
  }
}

export default SearchBox;