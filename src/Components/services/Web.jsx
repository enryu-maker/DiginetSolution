


import React from 'react';

import img from '../../Images/Images';

const WebDesign = () => {
const {webbtm, seoflow, webbanner, webservice} =img;

  const containerStyle = {
    marginTop: '3rem',
    marginBottom: '3rem',
  };

  const imageStyle = {
    maxWidth: '100%',
    borderRadius: '0.25rem',
  };

  const cardStyle = {
    border: 'none',
    borderRadius: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    transition: 'transform 0.3s',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    color: '#007bff',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontWeight: '700',
    color: '#333',
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontWeight: '600',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  };

  const textStyle = {
    fontSize: '1.1rem',
    fontWeight: '300',
  };

  return (
    <>

<div className="col-12">
          <img 
            src={webbanner} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '70vh', width: '100%' }}
          />
        </div>


    
      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          
          <div className="col-md-6">
  <img
    src={webbtm}
    alt="Social Media Marketing"
    style={{ ...imageStyle, width: '500px', height: '500px' }}
  />
</div>

          <div className="col-md-6">
            <h2 style={headingStyle} className="mb-4 text-dark">WEBSITE DESIGN & DEVELOPMENT</h2>
            <p style={textStyle}>
            Our team built an unforgettable web experience
            </p>
            <p style={{textAlign:'justify'}}>We are a leading Web Design & Development Company based in Nashik. Our job is to provide bold and innovative web design solutions and ensure that you expand your business by building a strong online presence.</p>
           <p style={{textAlign:'justify'}}>We are dedicated to providing pragmatic web design and development in Nashik to help our clients stay ahead of technological advancements. Our drive is to get you online seamlessly and get you a positive return on your digital investment. SpanDigit Social Website Development Company has helped clients with Affordable Website Development solutions, Web Page Design and Web Design.</p>
          </div>
        </div>
      </div>
      <div className="container" style={containerStyle}>
        <h2 style={headingStyle} className="text-center">Our Key Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <i className="fas fa-lightbulb" style={iconStyle}></i>
              <h4 style={titleStyle}>CUSTOMER-ORIENTED</h4>
              <p style={textStyle}>Building websites that loved by your customers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <i className="fas fa-chart-line" style={iconStyle}></i>
              <h4 style={titleStyle}>FUNCTIONAL</h4>
              <p style={textStyle}>Design to servee that purpose</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <i className="fas fa-paint-brush" style={iconStyle}></i>
              <h4 style={titleStyle}>OPTIMIZED</h4>
              <p style={textStyle}>Optimized for diffrent devices</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <i className="fas fa-users" style={iconStyle}></i>
              <h4 style={titleStyle}>EASINESS</h4>
              <p style={textStyle}>Easy to use and navigate</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <i className="fas fa-bullhorn" style={iconStyle}></i>
              <h4 style={titleStyle}>PERFORMANCE & SPEED</h4>
              <p style={textStyle}>Faster loading websites</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
          <img 
            src={webservice}  URL
            alt="Banner" 
            className="img-fluid"
            style={{ height: '', width: '100%' }}
          />
        </div>
        <div className="col-12">
          <img 
            src={seoflow} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '90%', width: '100%' }}
          />
        </div>
    </>
  );
};

export default WebDesign;
