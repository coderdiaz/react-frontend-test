import React from 'react';

const SearchBox = ({ placeholderText }) => {
  return (<div className="search-box bg-white flex">
    <input className="w-full rounded p-2" type="text" placeholder={placeholderText} />
    <button className="w-auto flex justify-end items-center p-2">
      <i className="fas fa-search"></i>
    </button>
  </div>);
}

export default SearchBox;