


import React from 'react';

import img from '../../Images/Images';

const ContentMarketing = () => {
const {contentbottom, contentbanner, contentservice, contentflow} =img;

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
            src={contentbanner} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '70vh', width: '100%' }}
          />
        </div>


    
      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          
          <div className="col-md-6">
  <img
    src={contentbottom}
    alt="Social Media Marketing"
    style={{ ...imageStyle, width: '500px', height: '500px' }}
  />
</div>

          <div className="col-md-6">
            <h2 style={headingStyle} className="mb-4 text-DARK">CONTENT MARKETING</h2>
           
            <p>Digital marketing is increasingly becoming the go-to option for businesses around the world. It is essential to observe how you represent your business in an online world. Your content is your business's ambassador when it comes to online presence. If it's not on your game, you may lose out on sales and revenue because good content can make or break your business.</p>
<p>With years of experience as a content marketing company, we have a skilled team that delivers a perfect blend of creative, promotional, engaging, and informational content. Our content focuses on grabbing a reader's attention & establishing a lasting impression that will help us to boost your brand.</p>
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
              <h4 style={titleStyle}>PROVIDE VALUE</h4>
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
              <h4 style={titleStyle}>MEASURABILITY</h4>
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
              <h4 style={titleStyle}>APPROCHABLE</h4>
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
              <h4 style={titleStyle}>CREATIVITY</h4>
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
              <h4 style={titleStyle}>KNOWLEDGABLE</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
          <img 
            src={contentservice} 
            alt="Banner" 
            className="img-fluid"
            style={{ height: '', width: '100%' }}
          />
        </div>
        <div className="col-12">
          <img 
            src={contentflow}
            alt="Banner" 
            className="img-fluid"
            style={{ height: '90%', width: '100%' }}
          />
        </div>
    </>
  );
};

export default ContentMarketing;
