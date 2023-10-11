import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdwn from './NavDropdwn';

const Header: React.FC = () => {
  const [isClassToggled, setIsClassToggled] = useState(false);

  const handleClick = () => {
    setIsClassToggled(prevState => !prevState);
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  
    return (
      <>
      <div className="main-header">
        <div className=" container d-flex justify-content-between align-items-center h-100">
          <Link to={'/'}>
        <img src={process.env.PUBLIC_URL+ "/media/logo.webp"} className="img-fluid logo h-45px h-sm-65px"/>
          </Link>
        <div className="menu d-none d-lg-flex align-items-center">
            <ul>
                <li>
                  <a href="">Features</a>
                  <ul className='nav-child-list'>
                    <NavDropdwn />
                  </ul>
                </li>
                <li><Link to='/directory'>Industry Directory</Link></li>
                <li><Link to='/request-a-demo'>Request a demo</Link></li>
            </ul>
            <div className='user-login'><img src={process.env.PUBLIC_URL+ "/media/user.svg"} className="img-fluid"/>Log In</div>
        </div>
        <div className='d-flex d-lg-none align-items-center'>
          <i onClick={handleClick} className="fa fa-bars fs-1 text-white" aria-hidden="true"></i>
          <div className='user-login m-0 mr-0 mx-sm-12 mx-3'><img src={process.env.PUBLIC_URL+ "/media/user.svg"} className="img-fluid"/><span className='d-none d-sm-block'>Log In</span></div>
        </div>
        </div>
      </div>

      {/* ==================== Mobile menu ==================== */}
      <div className={`mobile-menu ${isClassToggled ? 'mobile-menu-visible' : ''}`}>
      <div className="close-btn" onClick={handleClick}><i className="fa fa-times text-white"></i></div>
      <div className="nav-logo h-150px"><a href="/#" className="h-100"><img src={process.env.PUBLIC_URL+ "/media/logo.png"} alt="" title="" className="h-100"/></a></div>
      <div className="menu-outer">
        <ul className="navigation">
          <li onClick={toggleVisibility}> 
            <Link  className='d-flex justify-content-between w-100 align-items-center' to={'#!'}>Features  <i className="fa fa-angle-down text-white" aria-hidden="true"></i></Link>
          </li>
          {isVisible &&  <NavDropdwn />}
          <li><Link to='/directory'>Industry Directory</Link></li>
          <li><Link to='/request-a-demo'>Request a demo</Link></li>
        </ul>
      </div>
      </div>
      </>
    );
  }
  
  export default Header;