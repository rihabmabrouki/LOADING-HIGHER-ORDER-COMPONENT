

import React from 'react';
import "./lo.css";

const Spinner = () => {
  return (
    <div className="loader">
    <svg className="circular" viewBox="25 25 50 50">
    <circle
      className="path"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>Loading...
  
  </div>
    // <div className="ui active dimmer"> 
    //   <div className="loader"><i className="fas fa-spinner"></i>Loading...</div>
    // </div>
  );
};

export default Spinner;