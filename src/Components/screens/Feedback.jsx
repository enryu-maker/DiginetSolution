

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../Images/seo 3.png'
import Partners from '../screens/Partners'

export default function SimpleSlider() {
  const testimonials = [
    {
      name: "Mr. Deepak Rane",
      title: "Founder At ShreeNiwas Innovation Pvt. Ltd.",
      feedback:
        "A great team to work with. I was impressed by their attention to detail and genuine desire to learn about our company before they took on our ads. They have a very talented design team and their ad copy was also superb.",
      image: img,
    },
    {
      name: "Ms. Priya Sharma",
      title: "CEO at Tech Innovators",
      feedback:
        "Their innovative approach to digital marketing has significantly boosted our online presence. The team is knowledgeable and responsive, always ready to tackle any challenge. Highly recommend!",
      image: img,
    },
    {
        name: "Ms. Priya Sharma",
        title: "CEO at Tech Innovators",
        feedback:
          "Their innovative approach to digital marketing has significantly boosted our online presence. The team is knowledgeable and responsive, always ready to tackle any challenge. Highly recommend!",
        image: img,
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false 
        }
      }
    ]
  };

  
  // const internalStyles = `
  //   .slick-prev,
  //   .slick-next {
  //     top: 50%;
  //     transform: translateY(-50%);
  //     z-index: 1;
  //     color: #FFC107; /* Change arrow color to black */
  //     font-size: 15px; /* Adjust arrow size */
  //   }
  //   .slick-prev {
  //     left: 10px;
  //   }
  //   .slick-next {
  //     right: 10px;
  //   }
  //   @media (max-width: 768px) {
  //     .slick-prev,
  //     .slick-next {
  //       top: 85%;
  //     }
  //   }
  // `;

  return (
    <>
    <div className="container mx-auto py-4 p-8">
      
      {/* <style>{internalStyles}</style> */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex justify-center items-center h-96">
            <div className="max-w-lg p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <img
                  src={testimonial.image}
                  alt="Client Photo"
                  className="mx-auto mb-4 rounded-full border-4 border-white"
                  style={{ width: 150, height: 150 }}
                />
                <h3 className="text-3xl font-semibold mb-4">{testimonial.title}</h3>
                <p className="text-lg text-gray-800 mb-4">{testimonial.feedback}</p>
                <p className="text-gray-600">- {testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <Partners/>
    </>
  );
}



