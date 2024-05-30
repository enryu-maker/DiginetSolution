


import React from 'react';

import img from '../../Images/Images';

const Ppc = () => {
const {sharesocial, ppcbanner, ppcservice,ppcflow} =img;

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
            src={ppcbanner} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '70vh', width: '100%' }}
          />
        </div>


    
      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          
          <div className="col-md-6">
  <img
    src={sharesocial}
    alt="Social Media Marketing"
    style={{ ...imageStyle, width: '500px', height: '500px' }}
  />
</div>

          <div className="col-md-6">
            <h2 style={headingStyle} className="mb-4 text-dark">PPC MANAGEMENT</h2>
            <p style={textStyle}>
            Hire the best PPC agency to get maximum conversions with lower costs on Google & Facebook
            </p>
            <p style={{textAlign:'justify'}}>If you're searching for a fast rate of investment (ROI), you'll need to work with a result-oriented PPC marketing agency. SpanDigit Social is a Digital Marketing Agency that has expertise in creating effective campaigns in Google Ads, Bing Ads, social media, and many more platforms.</p>
          <p style={{textAlign:"justify"}}>While Search Engine Optimization (SEO) is an incredible approach for long-term development, once in a while you truly need a fast lift. SpanDigit offers PPC management services, guaranteeing that the money you spend is made to work for your business</p>
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
              <h4 style={titleStyle}>AN EMPHASIS ON DATA</h4>
              {/* <p style={textStyle}>Providing engaging content</p> */}
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
              <h4 style={titleStyle}>RESULT DRIVEN</h4>
              {/* <p style={textStyle}>Social efforts and track metrics</p> */}
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
              <h4 style={titleStyle}>CERTIFIED EXPERTS</h4>
              {/* <p style={textStyle}>Content that catches user’s attention</p> */}
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
              <h4 style={titleStyle}>ON-TIME DELIVERY</h4>
              {/* <p style={textStyle}>Analyzing target audience</p> */}
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
              <h4 style={titleStyle}>PERFORMANCE TRACKING</h4>
              {/* <p style={textStyle}>Drive social into the core of the marketing</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
          <img 
            src={ppcservice} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '', width: '100%' }}
          />
        </div>
        <div className="col-12">
          <img 
            src={ppcflow} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '90%', width: '100%' }}
          />
        </div>
    </>
  );
};

export default Ppc;
