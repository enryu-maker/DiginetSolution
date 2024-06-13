

import React from 'react';
import img from '../../Images/Images';
import { color } from 'framer-motion';

const VideoServices = () => {
 
 

  const {seopara, seobanner, seoservice, seoflow} =img;
  

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
    color:'Rajdhani',
    marginBottom: '5px',
    color:'#FFC107'
  };

  const bannerTextSubHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color:'Rajdhani',
  };

  const features = [
    {
      icon: 'fas fa-lightbulb',
      title: 'EXPERIENCED',
      description:'Get excellent results'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'LATEST TECHNIQUES',
      description:'Watch for the latest updates'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'PROFESSIONAL TEAM,',
      description:'Carry out research regularly'
    },
    {
      icon: 'fas fa-users',
      title: 'ETHICAL METHODOLOGY',
      description:'Prohibited black hat techniques'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'FLEXIBILITY',
      description:'Constant updates'
      
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
          src={seobanner}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
        <div style={bannerTextStyle}>
          <h1 style={{ ...bannerTextHeadingStyle }} className="banner-text-heading">Welcome to Our Company</h1>
          <p style={{ ...bannerTextSubHeadingStyle }} className="banner-text-subheading">SEARCH ENGINE OPTIMIZATION</p>
        </div>
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
            <p style={{ textAlign: 'justify' }}>
            These days where search engines have turned out to be one of the most influential mediums for information spreading an acute requirement for an SEO has become a must for all businesses. This is because of the sheer effectiveness of Search Engine Optimization, perhaps even becomes the ultimate success guarantor for days to come. In short, SEO is the primary and only savior for website traffic generation.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Diginit Solution is an SEO company in Nashik which has been in this industry right from the day the concept of SEO came into play. With our experienced SEO Experts especially for local SEO services we have managed to turn startups into industry benchmarks. SpanDigit’s SEO Services have been successful for various industries like Retail, Hospitality, Aviation, Movies, and lots more
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
          src={seoservice}
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

export default VideoServices;
