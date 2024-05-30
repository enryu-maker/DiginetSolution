






import React from 'react'
import about from '../Images/2banner.png'
import about1 from '../Images/about-gallery-2.png'


export default function About() {
 
  const containerStyle = {
    marginTop: "3rem",
    marginBottom: "3rem",
  };

  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "0.25rem",
  };

 





  
  const smallScreenImgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  return (
    <div>
      <div className="position-relative ">
        <img src={about} alt="" style={smallScreenImgStyle} />
      </div>
      
      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={about1}
              alt="Social Media Marketing"
              style={{ ...imageStyle, width: "500px", height: "500px" }}
            />
          </div>

          <div className="col-md-6">
          <p className='text-warning'>ABOUT US</p>
                <h1 style={{fontSize:"35px" ,fontWeight:"500"}}>WELCOME TO DIGINET SOLUTION!!</h1>

                <p style={{textAlign:'justify'}}> Diginet Social is a best digital marketing company in Nashik that was launched in 2004. Since then, we aim at helping businesses to create their brand identity in the market by offering them different types of digital marketing services. We offer Digital Marketing, SEO, Social Media Marketing, Graphic Designing, PPC and We Development services.

We have digital marketing experts on board that help businesses to grow and stand out in the competition via online marketing strategies. Our team includes graphic designers, SEO experts, social media marketers and digital marketers that have helped any small as well as medium businesses to mark their presence in the online world.

We are known for our best digital marketing
services in Nashik and have proven it by completing the needs of our clients at their desired time. At SpanDigit Social, we truly love what we do and you can check that in our work. Our unique marketing strategy and creative digital solutions help our customers to win in the competitive digital world.

We believe that your investment in our services should be
worthy and so ensure measurable results in each move.
Our team keeps a watch on the latest trends in the
online world and implements them in our marketing strategies
to deliver excellent results. We constantly look forward to deliver the best
digital marketing services to stand unique between the competitors. We commit
to help brands grow their business with our goal
oriented and affordable services to withstand in the
innovating digital world.</p>
          </div>
        </div>
      </div>
      

    </div>
  )
}
