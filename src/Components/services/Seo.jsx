


import React from 'react';

import img from '../../Images/Images';

const Seo = () => {
const {seopara, seobanner, seoservice, seoflow} =img;

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
            src={seobanner} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '70vh', width: '100%' }}
          />
        </div>


    
      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          
          <div className="col-md-6">
  <img
    src={seopara}
    alt="Social Media Marketing"
    style={{ ...imageStyle, width: '500px', height: '500px' }}
  />
</div>

          <div className="col-md-6">
            <h2 style={headingStyle} className="mb-4 text-dark">SEARCH ENGINE OPTIMIZATION</h2>
            <p style={textStyle}>
            Increase Your Organic Traffic & Start Growing Your Business
            </p>
            <p style={{textAlign:'justify'}}>These days where search engines have turned out to be one of the most influential mediums for information spreading an acute requirement for an SEO has become a must for all businesses. This is because of the sheer effectiveness of Search Engine Optimization, perhaps even becomes the ultimate success guarantor for days to come. In short, SEO is the primary and only savior for website traffic generation.</p>
            <p style={{textAlign:'justify'}}>Diginit Solution is an SEO company in Nashik which has been in this industry right from the day the concept of SEO came into play. With our experienced SEO Experts especially for local SEO services we have managed to turn startups into industry benchmarks. SpanDigit’s SEO Services have been successful for various industries like Retail, Hospitality, Aviation, Movies, and lots more</p>
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
              <h4 style={titleStyle}>EXPERIENCED</h4>
              <p style={textStyle}>Get excellent results</p>
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
              <h4 style={titleStyle}>LATEST TECHNIQUES</h4>
              <p style={textStyle}>Watch for the latest updates</p>
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
              <h4 style={titleStyle}>PROFESSIONAL TEAM</h4>
              <p style={textStyle}>Carry out research regularly</p>
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
              <h4 style={titleStyle}>ETHICAL METHODOLOGY</h4>
              <p style={textStyle}>Prohibited black hat techniques</p>
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
              <h4 style={titleStyle}>FLEXIBILITY</h4>
              <p style={textStyle}>Constant updates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
          <img 
            src={seoservice} // Replace with your image URL
            alt="Banner" 
            className="img-fluid"
            style={{ height: '', width: '100%' }}
          />
        </div>
        <div className="col-12">
          <img 
            src={seoflow} // Replace with your image URL
            alt="Banner" 
            className="img-fluid"
            style={{ height: '90%', width: '100%' }}
          />
        </div>
    </>
  );
};

export default Seo;
