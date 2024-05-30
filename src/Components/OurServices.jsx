

import React from 'react';
import img1 from '../Images/pay-per-click 1.png';
import img2 from '../Images/reputation 2.png';
import img3 from '../Images/seo 3.png';
import img4 from '../Images/SMM 4.png';
import img5 from '../Images/website-design-developemnt 5.png';
import img6 from '../Images/branding 6.png';
import img7 from '../Images/graphic-design 7.png';
import img8 from '../Images/content-marketing 8.png';
import img9 from '../Images/video-marketing 9.png';

export default function OurServices() {
  const arr = [
    { img: img1, title: 'PPC MANAGEMENT' },
    { img: img2, title: 'Reputation Management' },
    { img: img3, title: 'SEO' },
    { img: img4, title: 'SMM' },
    { img: img5, title: 'Website Design & Development' },
    { img: img6, title: 'Branding' },
    { img: img7, title: 'Graphic Design' },
    { img: img8, title: 'Content Marketing' },
    { img: img9, title: 'Video Marketing' },
  ];

  // Chunk the array into subarrays with 3 items each
  const chunkedArr = Array.from({ length: Math.ceil(arr.length / 3) }, (_, index) =>
    arr.slice(index * 3, index * 3 + 3)
  );

  return (
    <div>
      <div className="container-fluid pb-5 " style={{ background: '#f4f9fa' }}>
        <div className='text-center  '><p className='para1 text-warning pt-5'>SERVICES</p>
        <h1 >OUR SERVICES</h1>
        </div>
        <div className="container">

        {chunkedArr.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((service, colIndex) => (
              <div className="col-md-4 my-3" key={colIndex}>
                <div className="card " style={{height:"180px"}}>
                 <center> <img src={service.img} className='mt-5' style={{height:"50px", width:"50px"}} alt="..." /></center>
                  <div className="card-body">
                    <h5 className="card-title text-center">{service.title}</h5>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}

