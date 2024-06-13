import React from 'react';
import img from '../../Images/Images';
import { color } from 'framer-motion';

const SocialMediaFeatures = () => {
 
  const {sharesocial, ppcbanner, ppcservice,ppcflow} =img;

  const containerStyle = {
    marginTop: '1rem',
    marginBottom: '1rem',
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
    color: '#FFC107',
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

  const bannerTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
    color: 'white',
    textAlign: 'left',
  };

  const bannerTextHeadingStyle = {
    fontSize: '1.5rem',
    color:'#FFC107',
    marginBottom: '5px',
    fontFamily:'Rajdhani'
  };

  const bannerTextSubHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily:'Rajdhani'
  };

  const features = [
    {
      icon: 'fas fa-lightbulb',
      title: 'AN EMPHASIS ON DATA',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'RESULT DRIVEN',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'CERTIFIED EXPERTS',
    },
    {
      icon: 'fas fa-users',
      title: 'ON-TIME DELIVERY',
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'PERFORMANCE TRACKING',
      
    },
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .banner-text-heading {
              font-size: 10px !important;
            }
            .banner-text-subheading {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
      <div className="position-relative">
        <img
          src={ppcbanner}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
        <div style={bannerTextStyle}>
          <h1 style={{ ...bannerTextHeadingStyle }} className="banner-text-heading">Welcome to Our Company</h1>
          <p style={{ ...bannerTextSubHeadingStyle }} className="banner-text-subheading">PPC MANAGEMENT SERVICES</p>
        </div>
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
            <h2 style={headingStyle} className="mb-4 text-dark">PPC MANAGEMENNT</h2>
            <p style={textStyle}>
            Hire the best PPC agency to get maximum conversions with lower costs on Google & Facebook
            </p>
            <p style={{ textAlign: 'justify' }}>
            If you're searching for a fast rate of investment (ROI), you'll need to work with a result-oriented PPC marketing agency. SpanDigit Social is a Digital Marketing Agency that has expertise in creating effective campaigns in Google Ads, Bing Ads, social media, and many more platforms.
            </p>
            <p style={{ textAlign: 'justify' }}>
            While Search Engine Optimization (SEO) is an incredible approach for long-term development, once in a while you truly need a fast lift. SpanDigit offers PPC management services, guaranteeing that the money you spend is made to work for your business
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={containerStyle}>
        <h2 style={headingStyle} className="text-center">Our Key Features</h2>
        <div className="row">
          {features.slice(0, 3).map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div
                style={cardStyle}
                className="card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                <i className={feature.icon} style={iconStyle}></i>
                <h4 style={titleStyle}>{feature.title}</h4>
                <p style={textStyle}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          {features.slice(3).map((feature, index) => (
            <div className="col-md-4" key={index + 3}>
              <div
                style={cardStyle}
                className="card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                <i className={feature.icon} style={iconStyle}></i>
                <h4 style={titleStyle}>{feature.title}</h4>
                <p style={textStyle}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-12 p-0">
        <img
          src={ppcservice}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
      <div className="col-12 p-0">
        <img
          src={ppcflow}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
};

export default SocialMediaFeatures;
