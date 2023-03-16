import React from 'react';
import './LeftDiv.css';

const LeftDiv = ({ imageUrl }) => {
  return (
    <div className="left-div">
      <img src={imageUrl} alt="pic" />
    </div>
  );
};

export default LeftDiv;
