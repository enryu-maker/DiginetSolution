

import React from 'react';
import calltoaction from '../Images/1banner.png';
import './Navbar.css';

export default function CalltoAction() {
 

 
  

  const smallScreenImgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="position-relative">
          <img src={calltoaction} alt="" style={smallScreenImgStyle} />
         
        </div>
      </div>
    </>
  );
}
