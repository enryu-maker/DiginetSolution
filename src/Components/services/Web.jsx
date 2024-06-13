

import React from 'react';
import img from '../../Images/Images';
import { color } from 'framer-motion';

const Webservices = () => {
 
 

  const {webbtm, seoflow, webbanner, webservice} =img;
  
  

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
   fontFamily:'Rajdhani',
    marginBottom: '5PX',
  };

  const bannerTextSubHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily:'Rajdhani'

  };

  const features = [
    {
      icon: 'fas fa-lightbulb',
      title: 'CUSTOMER-ORIENTED',
      description:'Building websites that loved by your customers'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'FUNCTIONAL',
      description:'Designed to serve the purpose'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'OPTIMIZED,',
      description:'Optimized for different devices'
    },
    {
      icon: 'fas fa-users',
      title: 'EASINESS',
      description:'Easy to use and navigate'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'PERFORMANCE & SPEED',
      description:'Faster loading websites'
      
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
          src={webbanner}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
        <div style={bannerTextStyle}>
          <h1 style={{ ...bannerTextHeadingStyle }} className="banner-text-heading">Welcome to Our Company</h1>
          <p style={{ ...bannerTextSubHeadingStyle }} className="banner-text-subheading">WEBSITES DESIGN & DEVELOPMENT</p>
        </div>
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
            <p style={{ textAlign: 'justify' }}>
            We are a leading Web Design & Development Company based in Nashik. Our job is to provide bold and innovative web design solutions and ensure that you expand your business by building a strong online presence.
            </p>
            <p style={{ textAlign: 'justify' }}>
            We are dedicated to providing pragmatic web design and development in Nashik to help our clients stay ahead of technological advancements. Our drive is to get you online seamlessly and get you a positive return on your digital investment. SpanDigit Social Website Development Company has helped clients with Affordable Website Development solutions, Web Page Design and Web Design.
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
          src={webservice}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
      <div className="col-12 p-0">
        <img
          src={seoflow}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
};

export default Webservices;



