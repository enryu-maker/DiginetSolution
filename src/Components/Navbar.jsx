


import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../Images/logo.png';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed-top w-100">
      <div className="container border-bottom border-warning border-5 p-2">
        <img src={logo} alt="DIGINET Logo" style={{ height: '100px', width: '100px' }} />
        <NavLink to="/" className="navbar-brand text-warning fs-4">
          DIGINET
        </NavLink>

        <button
          className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
          type="button"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginLeft: '0', marginTop: '0.5rem' }}>
              <NavLink to="/" className="nav-link text-white ms-3" exact activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginLeft: '0', marginTop: '0.5rem' }}>
              <NavLink to="/about" className="nav-link text-white ms-3" activeClassName="active">
                ABOUT US
              </NavLink>
            </li>
            <li 
              className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`} 
              style={{ marginLeft: '0', marginTop: '0.5rem' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className={`nav-link dropdown-toggle text-white ms-3 ${isServicesActive ? 'active' : ''}`}
                id="navbarDropdown"
                role="button"
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
                onClick={handleDropdownToggle}
              >
                SERVICES
              </a>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: 'black' }}
              >
                <li>
                  <NavLink
                    to="/socialmarketing"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    SOCIAL MEDIA MARKETING
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ppc"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    PPC MANAGEMENT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/videoservices"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    VIDEO MARKETING
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contentservices"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    CONTENT MARKETING
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/graphicservices"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    GRAPHIC DESIGN
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/branding"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    BRANDING
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/seoservices"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    SEARCH ENGINE OPTIMIZATION
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/webservices"
                    className="dropdown-item text-white"
                    onClick={handleDropdownItemClick}
                  >
                    WEBSITE DESIGN & DEVELOPMENT
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item" style={{ marginLeft: '0', marginTop: '0.5rem' }}>
              <NavLink to="/portfolio" className="nav-link text-white ms-3" activeClassName="active">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginLeft: '0', marginTop: '0.5rem' }}>
              <NavLink to="/contact" className="nav-link text-white ms-3" activeClassName="active">
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <div className="d-none d-lg-block ms-lg-3">
            <button className="btn btn-warning" style={{ fontSize: '0.8rem', padding: '0.3rem 0.7rem' }}>
              <span className="text-dark">
                <i className="fas fa-phone-flip" style={{ marginRight: '0.5rem' }}></i> PHONE NUMBER
                <br />
                +91 8007030184
              </span>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          .nav-link:hover, .dropdown-item:hover {
            color: #ffc107 !important;
          }
          .dropdown-menu.show {
            display: block;
          }
        `}
      </style>
    </nav>
  );
}
