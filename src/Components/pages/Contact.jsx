import React from 'react';
import contactimg from '../../Images/Banner diginet.png';
import Contactform from '../Contactform';

export default function Contact() {
  
  

  

  
  const smallScreenImgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  return (
    <>
      
    
      <div className="position-relative ">
        <img src={contactimg} alt="" style={smallScreenImgStyle} />
       
      </div>
<Contactform/>
      
    </>
  );
 }