import React, { useState } from 'react';


export default function Contactform() {
  const [buttonHover, setButtonHover] = useState(false);

  const handleMouseOver = () => {
      setButtonHover(true);
  };

  const handleMouseOut = () => {
      setButtonHover(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        form.reset(); 
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



 

  return (
    <div style={{fontFamily:'poppins'}} className="container-fluid mt-4 contact-info">
      <div className="row justify-content-center px-3">
        <div className="col-lg-6 col-md-10 col-sm-12">
          <div className="contact-info">
            <div className="section-title">
              <span className="title-tag">Contact info</span>
              <h2 className="title m-2">Catch us here</h2>
            </div>
            <div className="contact-info-list row mobile_no_style">
              <div className="col-lg-4 col-md-4 col-sm-12 mb-3 address">
                <p style={{textAlign:'justify'}}>
                  <i className="fa-solid fa-location-dot icons text-warning">&nbsp;</i>
                  1st Floor Office No.6, Jagdish Sankul, KBT Circle, near Wellness Medical, Thatte Nagar, Nashik, Maharashtra 422005
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mb-3 address text-center">
                <p>
                  <i className="fa-solid fa-phone icons text-warning"></i> &nbsp;India
                </p>
                <a href="tel:+91 8329905564" style={{textDecoration:'none',fontWeight:'bold', color:"black"}} className="contact_text_style">
                  +91 8007030184
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleFormSubmit}>
          <div className="contact-form mt-4">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        id="name"
                        name="name"
                        style={{ border: 'none', borderBottom: '2px solid #ffc107' }}
                    />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        name="email"
                        style={{ border: 'none', borderBottom: '2px solid #ffc107' }}
                    />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Company name"
                        id="companyname"
                        name="companyname"
                        style={{ border: 'none', borderBottom: '2px solid #ffc107' }}
                    />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        style={{ border: 'none', borderBottom: '2px solid #ffc107' }}
                    />
                </div>
                <div className="col-12 mb-4">
                    <textarea
                        className="textarea form-control"
                        id="help"
                        name="help"
                        placeholder="How Can We Help?"
                        style={{ border: 'none', borderBottom: '2px solid #ffc107' }}
                    ></textarea>
                </div>
                <div className="col-12 text-center">
                    <button
                        type="submit"
                        className="btn mb-2"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        style={{
                            backgroundColor: buttonHover ? '#ffc107' : 'initial',
                            color: buttonHover ? 'white' : 'initial',
                            transition: 'background-color 0.3s, color 0.3s',
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-10 col-sm-12 contact-maps mt-4 mt-lg-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9605033475427!2d73.76140297468801!3d20.01017232198374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebfd2ce976af%3A0x8219ab713c3ffc46!2sDigiNet%20Solutions!5e0!3m2!1sen!2sin!4v1716551366750!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

