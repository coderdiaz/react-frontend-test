import React from 'react';

const BadgeIcon = ({ count = 0, iconName }) => {
  return (<button className="badge__icon">
    <i className={'fas fa-' + iconName}></i>
    { count !== 0 ? 
      <span className="badge__counter">{count}</span> 
    : null }
  </button>);
}

export default BadgeIcon;