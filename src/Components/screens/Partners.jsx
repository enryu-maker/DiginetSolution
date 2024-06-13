


// import React from 'react';
// import Slider from 'react-slick';
// import img from '../../Images/Images';

// const { google, fb, insta, linkdin, meta } = img;

// const logos = [google, fb, insta, linkdin, meta];

// const LogoCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-center py-10">Our Partners</h1>
//       <Slider {...settings}>
//         {logos.map((logo, index) => (
//           <div key={index} className="px-2">
//             <img
//               style={{ justifyContent:'center', width: '100%', height: 'auto', maxWidth: '150px', maxHeight: '150px' }}
//               src={logo}
//               alt={`Logo ${index + 1}`}
//               className="h-16 mx-auto"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default LogoCarousel;




import React from 'react';
import Slider from 'react-slick';
import img from '../../Images/Images';

const { google, fb, insta, linkdin, meta } = img;

const logos = [google, fb, insta, linkdin, meta];

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false 
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2  style={{ fontSize: "28px", fontWeight: "500", color: '#333' }} className="text-center py-4">OUR PARTNERS</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            <img
              style={{ justifyContent:'center', width: '100%', height: 'auto', maxWidth: '150px', maxHeight: '150px' }}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 mx-auto"
            />
          </div>
        ))}
      </Slider>

      {/* Internal CSS for hiding arrows on smaller screens */}
      <style>
        {`
          @media (max-width: 768px) {
            .slick-prev, .slick-next {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoCarousel;
