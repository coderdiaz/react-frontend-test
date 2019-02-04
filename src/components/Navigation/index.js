import React, { Component } from 'react';
import BadgeIcon from '../BadgeIcon';
import SearchBox from '../SearchBox';
import { AppContext } from '../../Context';

class Navigation extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown',this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown',this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.context.show(false);
    }
  };

  render () {
    return (<nav ref={this.setWrapperRef} className="navigation flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-no-shrink">
        <span className="font-semibold tracking-normal text-white">React Frontend Test</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex-grow"></div>
        <div>
          <ul className="list-reset flex items-center navigation__options">
            <li className="mr-4">
              <SearchBox placeholderText="Search..." width={200}></SearchBox>
            </li>
            <li className="mr-4">
              <BadgeIcon count={10} iconName="bell"></BadgeIcon>
            </li>
            <li className="mr-4">
              <BadgeIcon count={7} iconName="envelope"></BadgeIcon>
            </li>
            <li className="mr-4">
              <BadgeIcon iconName="user"></BadgeIcon>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
  }
}

export default Navigation;