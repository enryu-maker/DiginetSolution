import React from "react";

import img from "../../Images/Images";

const VideoMarketing = () => {
  const { vdobottom, videobanner, videoservice, videoflow } = img;

  const containerStyle = {
    marginTop: "3rem",
    marginBottom: "3rem",
  };

  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "0.25rem",
  };

  const cardStyle = {
    border: "none",
    borderRadius: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    transition: "transform 0.3s",
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#007bff",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontWeight: "700",
    color: "#333",
    marginBottom: "1.5rem",
  };

  const titleStyle = {
    fontWeight: "600",
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  };

  const textStyle = {
    fontSize: "1.1rem",
    fontWeight: "300",
  };

  return (
    <>
      <div className="col-12">
        <img
          src={videobanner}
          alt="Banner"
          className="img-fluid"
          style={{ height: "70vh", width: "100%" }}
        />
      </div>

      <div className="container" style={containerStyle}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={vdobottom}
              alt="Social Media Marketing"
              style={{ ...imageStyle, width: "500px", height: "500px" }}
            />
          </div>

          <div className="col-md-6">
            <h2 style={headingStyle} className="mb-4 text-dark">
              VIDEO MARKETING
            </h2>

            <p style={{ textAlign: "justify" }}>
              Many times video marketing is overlooked. However, it can play a
              significant role in a brand's content marketing plan. How?
              According to statistics, YouTube is the second largest search
              engine after Google, websites with videos in them experience a
              150% increase in organic traffic. By 2020, videos are accounted
              for 85% of online traffic worldwide. Videos can create a necessary
              connection with audiences and enable them to interact with your
              brand. Hence, videos can earn greater trust & confidence for
              products or services amongst your customers.
            </p>
            <p style={{ textAlign: "justify" }}>
              This is why 54% of consumers say they would like to see more video
              content from brands they like. If you're planning to include
              videos in your marketing strategy, you're making a smart move and
              your customers will appreciate you. Our team of video experts
              makes sure that our videos will have a great impact on customer's
              minds. With years of experience, our videos are proven to be more
              effective and gave exceptional results in terms of branding,
              conversions, and leads.
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={containerStyle}>
        <h2 style={headingStyle} className="text-center">
          Our Key Features
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = cardHoverStyle.transform)
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <i className="fas fa-lightbulb" style={iconStyle}></i>
              <h4 style={titleStyle}>INTERACTIVE</h4>
              {/* <p style={textStyle}>Providing engaging content</p> */}
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = cardHoverStyle.transform)
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <i className="fas fa-chart-line" style={iconStyle}></i>
              <h4 style={titleStyle}>HIGHLY EFFECTIVE</h4>
              {/* <p style={textStyle}>Social efforts and track metrics</p> */}
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = cardHoverStyle.transform)
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <i className="fas fa-paint-brush" style={iconStyle}></i>
              <h4 style={titleStyle}>ENGAGING</h4>
              {/* <p style={textStyle}>Content that catches user’s attention</p> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = cardHoverStyle.transform)
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <i className="fas fa-users" style={iconStyle}></i>
              <h4 style={titleStyle}>CREATIVITY</h4>
              {/* <p style={textStyle}>Analyzing target audience</p> */}
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={cardStyle}
              className="card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = cardHoverStyle.transform)
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <i className="fas fa-bullhorn" style={iconStyle}></i>
              <h4 style={titleStyle}>EYE-CATHING</h4>
              {/* <p style={textStyle}>Drive social into the core of the marketing</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <img
          src={videoservice} 
          alt="Banner"
          className="img-fluid"
          style={{ height: "", width: "100%" }}
        />
      </div>
      <div className="col-12">
        <img
          src={videoflow} 
          alt="Banner"
          className="img-fluid"
          style={{ height: "90%", width: "100%" }}
        />
      </div>
    </>
  );
};

export default VideoMarketing;
