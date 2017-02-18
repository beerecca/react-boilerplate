import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="rb-loader">
      <div className="rb-loader--dot"></div>
      <div className="rb-loader--dot"></div>
      <div className="rb-loader--dot"></div>
    </div>
  )
};

export default Loading;
