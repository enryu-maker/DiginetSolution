
import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Web Developing', iconClass: 'fa-solid fa-server' },
    { id: 2, name: 'Video Marketing', iconClass: 'fa-solid fa-video' },
    { id: 3, name: 'Social Media Marketing', iconClass: 'fa-solid fa-share-alt' },
    { id: 4, name: 'Graphic Designing', iconClass: 'fa-solid fa-palette' },
    { id: 5, name: 'Content Marketing', iconClass: 'fa-solid fa-pencil-alt' },
    { id: 6, name: 'SEO', iconClass: 'fa-solid fa-chart-line' },
    // { id: 7, name: 'PPC', iconClass: 'fa-solid fa-ad' },
  ];

  const cardStyle = {
    position: 'relative',
    width: '100%',
    height: '250px',
    // borderRadius: '10px',
    overflow: 'hidden',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: 'black',
    transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
  };

  const cardContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  return (
    <div className="container-fluid" style={{ marginTop: '', backgroundColor:'#F4F9FA' }}>
      <h2 className="text-center py-4" style={{ fontSize: "28px", fontWeight: "500", color: '#333' }}>Our Services</h2>
      <div className='container'>
        <div className='row'>
          {services.map(service => (
            <div
              key={service.id}
              className="col-md-4 mb-4"
            >
              <div
                style={cardStyle}
                className="card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'black';
                }}
              >
                <div style={cardContentStyle}>
                  <i className={service.iconClass} style={{ color: '#FFD43B', fontSize: '3rem' }}></i>
                  <h5>{service.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;



