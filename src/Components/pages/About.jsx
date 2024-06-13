import React from 'react';
import about from '../../Images/2banner.png';
import about1 from '../../Images/about1.webp';
import about2 from '../../Images/about2.webp';
import ceo from '../../Images/about/co-founder.jpg';
import cof from '../../Images/about/ceo.jpg';
import bg from '../../Images/aabg.jpg'

export default function About() {

  const bgimg ={
    backgroundImage:`url(${bg})`
  }
  

  const containerStyle = {
    marginTop: "3rem",
    marginBottom: "3rem",
      backgroundImage:`url(${bg})`
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "0.25rem",
  };

  const smallScreenImgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  const fixedImageStyle = {
    width: '100%',
    height: '400px', 
    objectFit: 'cover', 
  };

  const content = [
    {
      img: about1,
      title: "WELCOME TO DIGINET SOLUTION!!",
      text: `Diginet Solution is a best digital marketing company in Nashik that was launched in 2020. Since then, we aim at helping businesses to create their brand identity in the market by offering them different types of digital marketing services. We offer Digital Marketing, SEO, Social Media Marketing, Graphic Designing, PPC and We Development services.
        We have digital marketing experts on board that help businesses to grow and stand out in the competition via online marketing strategies. Our team includes graphic designers, SEO experts, social media marketers and digital marketers that have helped any small as well as medium businesses to mark their presence in the online world.
        We are known for our best digital marketing services in Nashik and have proven it by completing the needs of our clients at their desired time. At Diginet Solution, we truly love what we do and you can check that in our work. Our unique marketing strategy and creative digital solutions help our customers to win in the competitive digital world.
        We believe that your investment in our services should be worthy and so ensure measurable results in each move. Our team keeps a watch on the latest trends in the online world and implements them in our marketing strategies to deliver excellent results. We constantly look forward to deliver the best digital marketing services to stand unique between the competitors. We commit to help brands grow their business with our goal oriented and affordable services to withstand in the innovating digital world.`,
    },
    {
      img: about2,
      title: "OUR MISSION AND VISION",
      text: `Our mission is to empower businesses with innovative digital solutions that drive measurable growth and success. We envision a future where every business, regardless of size, can leverage the power of digital marketing to reach their target audience and achieve their goals. We are committed to staying ahead of industry trends and continuously improving our services to deliver the best results for our clients. Our vision is to be the leading digital marketing agency known for creativity, innovation, and excellence in service delivery.`,
    },
  ];

  return (
    <>
      <div  style={{fontFamily: "Poppins"}}>
        <div className="position-relative">
          <img src={about} alt="Banner" style={smallScreenImgStyle} />
        </div>

        <div className="container" style={containerStyle}>
          {content.map((item, index) => (
            <div className="row align-items-center mb-4" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-5 mb-3">
                    <img
                      src={item.img}
                      alt="Content"
                      style={imageStyle}
                      data-aos="zoom-in"
                    />
                  </div>
                  <div className="col-md-7">
                    <p className='text-warning'>ABOUT US</p>
                    <h1 style={{ fontSize: "28px", fontWeight: "500", marginBottom: "1rem" }}>{item.title}</h1>
                    <p  data-aos="zoom-in-right" style={{ textAlign: 'justify', lineHeight: '1.6' , fontSize:'14px' }}>{item.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-5 mb-3 order-md-2">
                    <img
                      src={item.img}
                      alt="Content"
                      style={imageStyle}
                      data-aos="zoom-in"
                    />
                  </div>
                  <div className="col-md-7 order-md-1">
                   
                    <h1 style={{ fontSize: "28px", fontWeight: "500", marginBottom: "1rem" }}>{item.title}</h1>
                    <p  data-aos="zoom-in-right" style={{ textAlign: 'justify', lineHeight: '1.6', fontSize:'14px' }}>{item.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      <div style={bgimg}>
      <div className='container' style={{margin: '50px auto', maxWidth: '800px' }}>
        <style>
          {`
          
            .image-container {
              position: relative;
              overflow: hidden;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .image-container img {
              max-width: 100%;
              height: auto;
              display: block;
            }

            .image-text {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              color: #fff;
              padding: 10px;
              font-size: 18px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              transition: background-color 0.3s ease;
            }

            .image-text .details {
              display: none;
              margin-top: 5px;
            }

            .image-text:hover {
              background-color: rgba(0, 0, 0, 0.7);
            }

            .image-text:hover .details {
              display: block;
            }

            .image-text a {
              color: #fff;
              text-decoration: underline;
            }

            @media (max-width: 991.98px) {
              .image-container {
                border-radius: 0;
              }
            }

            @media (max-width: 767.98px) {
              .col-md-6 {
                flex: 0 0 100%;
                max-width: 100%;
              }
            }
          `}
        </style>

        <div  className='container'>
          <h1 style={{fontSize: "28px", fontWeight: "500", color: '#333', fontFamily:'poppins' }} className='text-center py-4 '>The Architects of Our Success</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="image-container">
              <img data-aos="fade-down-right" src={ceo} alt="CEO" className="img-fluid" style={fixedImageStyle} />
              <div className="image-text">
                <div>Akshay Dhumal </div>
                <div className="details">
                  <div>CHIEF EXECUTIVE OFFICER</div>
                  <div><a href="https://www.linkedin.com/in/akshay-dhumal-529167137?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">View Profile</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img data-aos="fade-down-left" src={cof} alt="Co-Founder" className="img-fluid" style={fixedImageStyle} />
              <div className="image-text">
                <div>Kiran Ubale</div>
                <div className="details">
                  <div>CHIEF GROWTH OFFICER</div>
                  <div><a href="https://www.linkedin.com/in/kiran-ubale-56323b1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">View Profile</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
