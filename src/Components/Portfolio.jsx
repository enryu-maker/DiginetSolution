


import React from 'react';
import pimg1 from '../Images/services/portfolioimg1.png';
import pimg2 from '../Images/services/portfolioimg2.png';

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center my-4">Our Works</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 text-center">
          <img src={pimg1} alt="Portfolio" className="img-fluid" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 text-center">
          <img src={pimg2} alt="Portfolio" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
