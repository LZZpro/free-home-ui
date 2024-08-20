import React, { useState } from 'react';
import '../css/Danmu.css';
const Danmu = ({ comments }) => {
  return (
    <div className="danmu">
      {comments.map((comment, index) => (
        <div key={index} className="danmu-comment">{comment}</div>
      ))}
    </div>
  );
};

export default Danmu;
