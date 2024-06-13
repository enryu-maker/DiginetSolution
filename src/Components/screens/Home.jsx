

import React from 'react';
import home1 from '../../Images/home1.jpeg';
import Counter from '../Counter';
import CalltoAction from '../CalltoAction';
import videofile from '../../Images/video.mp4';
import HomeServices from './HomeServices';
import Feedback from './Feedback';
import map from '../../Images/websitemap.png';
import Partner from '../screens/Partners';
import bg from '../../Images/aabg.jpg'

export default function Home() {
const bgimg ={
  backgroundImage:`url(${bg})`
}


  return (
    <>
    <div style={{fontFamily: "Poppins"}} >
      <div className="container-fluid p-0 bg-dark">
        <video src={videofile} autoPlay muted loop className="w-100" style={{ height: 'auto' }}></video>
      </div>

      <div style={bgimg} className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="zoom-in">
            <img 
              src={home1} 
              alt="Diginet Social" 
              className='img-fluid rounded shadow' 
              onError={(e) => { e.target.onerror = null; e.target.src = "path_to_default_image"; }} // Provide a default image path
            />
          </div>
          <div className="col-md-6">
            <div className="about-content mt-3">
              <span className='text-warning fw-bold ps-3 mb-4 d-block'>ABOUT DIGINET SOCIAL</span>
              <h1 className='display-5 ps-3'>GET AMAZING RESULT <br />
                <span className='text-warning '><b>WITH SOLID TEAM</b></span>
              </h1>
              <p className='text-muted px-3' style={{ textAlign: 'justify' }}>
                Diginet Social is not just a Digital Marketing Agency but an end-to-end hub for everything you need to have significant presence and generating revenue through online marketing efforts.
              </p>
              <p className='text-muted px-3' style={{ textAlign: 'justify' }}>
                Our team of designers, developers, and strategists have successfully launched start-ups as well as transformed weak brands into online marketing benchmarks. We are continually making ourselves better each day with technology getting better and more exciting.
              </p>
              <div className='services-list px-3'>
                <p><span className='text-warning'>---</span> SEARCH ENGINE OPTIMIZATION</p>
                <p><span className='text-warning'>---</span> WEBSITE DESIGN & DEVELOPMENT</p>
                <p><span className='text-warning'>---</span> SOCIAL MEDIA MARKETING</p>
                <p><span className='text-warning'>---</span> PPC SERVICES (LEAD GENERATION)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Counter />

      <HomeServices />

      <CalltoAction />

      <Partner />

      <div style={{ backgroundColor: '#F4F9FA' }} className="container-fluid mt-5">
        <h2  style={{fontSize: "28px", fontWeight: "500", color: '#333' }} className='text-center py-4'>OUR GLOBAL CLIENT COVERAGE</h2>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <img src={map} alt="Map" className="img-fluid rounded " style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
