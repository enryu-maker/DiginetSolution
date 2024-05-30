



import React from "react";
import { Link } from "react-router-dom";
import footerlogo from '../Images/footer1.png'

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#343a40",
    color: "#b8c1ec",
  };

  const titleStyle = {
    fontWeight: "bold",
    color: "#ffc107",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    color: "#ffc107",
  };

  const socialIconStyle = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: "0 5px",
    border: "none",
    backgroundColor: "#ffc107",
  };

  const borderBottomStyle = {
    borderBottom: "2px solid #ffc107",
  };

  const justifyTextStyle = {
    textAlign: "justify",
  };

  return (
    <>
      <div className="footer" style={footerStyle}>
        <div className="container">
          <div className="row py-5" style={borderBottomStyle}>
            <div className="col-md-4 col-sm-12 text-center text-white mt-5">
              <h4 style={titleStyle}>OUR LOCATION</h4>
              <p className="mt-4" style={justifyTextStyle}>
                1st Floor Office No.6, Jagdish Sankul, KBT Circle, near Wellness
                Medical, Thatte Nagar, Nashik, Maharashtra 422005
              </p>
              <div className="social-icons mt-3">
                <a href="https://www.facebook.com/share/vrj9pWssSSHijE6z/?mibextid=JRoKGi">
                  <button type="button" className="btn" style={socialIconStyle}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </button>
                </a>

                <a href="https://www.instagram.com/diginetsolution_?igsh=YjVwbG5qM2t6ZDA=">
                  <button type="button" className="btn" style={socialIconStyle}>
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                </a>
                <a href="https://g.co/kgs/trmgSwK">
                  <button type="button" className="btn" style={socialIconStyle}>
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                </a>
                <a href="https://www.linkedin.com/company/diginet-solutions-ltd/">
                  <button type="button" className="btn" style={socialIconStyle}>
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-5">
              <h4 className="text-center" style={titleStyle}>
                OUR PAGES
              </h4>
              <ul className="list-unstyled mt-4 text-center">
                <li className="my-2">
                  <Link
                    to="/about"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    About us
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/services"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Services
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/contact"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div  className="col-md-4 col-sm-12 mt-5">
              <h4  className="text-center" style={titleStyle}>
                OUR SERVICES
              </h4>
              <ul style={{marginLeft:'120px'}} className="list-unstyled mt-4 text-left">
                <li className="my-2">
                  <Link
                    to="/socialmarketing"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/ppc"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    PPC Management
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/videoservices"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Video Marketing
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/contentservices"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Content Marketing
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/graphicservices"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Graphic Design
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/branding"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Branding
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/seoservices"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/webservices"
                    className="footername"
                    style={linkStyle}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = linkHoverStyle.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Website Design & Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="row text-white p-4"
            style={{ backgroundColor: "black" }}
          >
            <div className="col-12 text-center">
              <i className="fa-regular fa-copyright"></i>
              <span className="ps-2">
                2024 All Rights Reserved. <img style={{height:'70px', width:'300px'}} src={footerlogo} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
