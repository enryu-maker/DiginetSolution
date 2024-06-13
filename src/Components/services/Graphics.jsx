import React from 'react';
import img from '../../Images/Images';

const VideoServices = () => {
 
  const { graphicbtm, graphicflow, graphicservice, graphicbanner } = img;

  

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
    fontFamily:'Rajdhani',
    color:'#FFC107',
    marginBottom: '5px',
  };

  const bannerTextSubHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily:'Rajdhani'
  };

  const features = [
    {
      icon: 'fas fa-lightbulb',
      title: 'CREATIVE EXPERTS',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'EYE-CATCHING DESIGN',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'HIGH QUALITY BRANDING',
    },
    {
      icon: 'fas fa-users',
      title: 'LATEST SOFTWARE',
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'CUSTOM DESIGNS',
      
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
          src={graphicbanner}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
        <div style={bannerTextStyle}>
          <h1 style={{ ...bannerTextHeadingStyle }} className="banner-text-heading">Welcome to Our Company</h1>
          <p style={{ ...bannerTextSubHeadingStyle }} className="banner-text-subheading">GRAPHIC DESIGN SERVICES</p>
        </div>
      </div>
      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={graphicbtm}
              alt="Social Media Marketing"
              style={{ ...imageStyle, width: '500px', height: '500px' }}
            />
          </div>
          <div className="col-md-6">
            <h2 style={headingStyle} className="mb-4 text-dark">GRAPHICS DESIGNING</h2>
            <p style={textStyle}>
            DESIGN CREATIVE GRAPHICS AND KEEP YOUR AUDIENCE ENGAGED


            </p>
            <p style={{ textAlign: 'justify' }}>
            Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Diginet Solution is a graphic design company in Nashik which has been in this industry right from the day graphic designing was started. We have creative graphic designersthat have helped many businesses to create their brand’s identity in the market. SpanDigit’s graphic design services have been found to be helpful for various niche such as Real Estate, Hotels, Hospitality, Health and Fitness, and so on.
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
          src={graphicservice}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
      <div className="col-12 p-0">
        <img
          src={graphicflow}
          alt="Banner"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
};

export default VideoServices;
