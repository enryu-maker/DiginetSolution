


import React from 'react';
import contactimg from '../Images/1banner.png';

const Services = () => {
  const carasol = [
    {
      title: 'Digital Marketing',
      plan: 'Basic Plan',
      charges: 'Facebook Ads Charges( ₹100) / Day',
      banners: 'We will provide 10 banners and 5 videos during this period',
      Ads: 'The Ads Charges vary depending on the number of clicks per day so there may be some variation in charges',
      insta: 'New Instagram Page Create',
      Facebook: 'New Facebook Page Create',
      Monthly: 'Monthly advertising (4 Days) in a Week',
      Month: 'Monthly Charges Total = 7000/-',
      Months: '6 Month Charges Total(42,000/-) = Including Discount 39,000/-',
      Year: 'Yearly charges Total(84,000/-) = Including Discount 72,999/-'
    },
    {
      title: 'Digital Marketing',
      plan: 'Standard Plan',
      charges: 'Facebook Ads Charges( ₹200) / Day',
      banners: 'We will provide 20 banners and 10 videos during this period',
      Ads: 'The Ads Charges vary depending on the number of clicks per day so there may be some variation in charges',
      insta: 'New Instagram Page Create',
      Facebook: 'New Facebook Page Create',
      Monthly: 'Monthly advertising (4 Days) in a Week',
      Logo: 'New Logo Design',
      Month: 'Monthly Charges Total = 12,000/-',
      Months: '6 Month Charges Total(72,000/-) = Including Discount 69,000/-',
      Year: 'Yearly charges Total(1,44,000/-) = Including Discount 1,34,999/-'
    },
    {
      title: 'Digital Marketing',
      plan: 'Premium Plan',
      charges: 'Facebook Ads Charges( ₹300) / Per Day',
      banners: 'We will provide Unlimited banners and 15 videos during this period',
      Ads: 'The Ads Charges vary depending on the number of clicks per day so there may be some variation in charges',
      insta: 'New Instagram Page Create',
      Facebook: 'New Facebook Page Create',
      Google: 'Google Listing Of the business',
      Logo: 'New Logo Design',
      Youtube: 'Youtube Heading',
      Animation: 'Animation video with created voice node',
      Month: 'Monthly Charges Total = 16,000/-',
      Months: '6 Month Charges Total(96,000/-) = Including Discount 99,999/-',
      Year: 'Yearly charges Total(1,92,000/-) = Including Discount 1,82,999/-'
    },
  ];

  const sendMessage = () => {
    const message = encodeURIComponent('Hi there! I saw your digital marketing plans and I\'m interested in learning more about the Basic Plan. Could you please provide more details about the Facebook Ads Charges and the services included? Thank you!');
    
    const phoneNumber = '918007030184';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl);
  };

  return (
    <>
      <div className="position-relative">
        <img src={contactimg} alt="" className="w-100 img-fluid" />
      </div>

      <div className="container-fluid bg-light">
        <h1 className="text-center mt-3 py-3">Offers & Promotions</h1>
        <div className="row">
          {carasol.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 mt-5 bg-dark text-white">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.plan}</h5>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.charges}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.banners}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.Ads}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.insta}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.Facebook}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.Monthly}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.Month}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.Months}</p>
                  <p className="card-text"><i className="fa-solid fa-check me-2"></i>{item.Year}</p>
                  <div className="mt-auto">
                    <button className="btn btn-outline-warning w-100" onClick={sendMessage}>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card {
          border: none;
          border-radius: 0.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        .card-body {
          padding: 2rem;
        }
        .card-title {
          margin-bottom: 1rem;
        }
        .card-text {
          margin-bottom: 0.5rem;
        }
        .btn-outline-light {
          border-width: 2px;
        }
        .container-fluid {
          padding: 3rem 2rem;
        }
      `}</style>
    </>
  );
};

export default Services;
