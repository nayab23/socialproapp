import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { List } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <footer className="footer bg-1 py-md-20 py-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 d-flex justify-content-center justify-content-lg-start">
              <Link to={'/'}><img src={process.env.PUBLIC_URL+ "/media/logo.webp"} className="img-fluid h-65px"/></Link>
            </div>
            <div className="col-lg-2 col-md-4 mt-6 mt-lg-0 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start">
              <StyledTypographyh3Secondary variant="h3" >
                SERVICES
              </StyledTypographyh3Secondary>
              <List className="mt-4">
                <StyledListItmeSecondary><Link to={'/request-a-demo'}>REQUEST A DEMO</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/directory'}>INDUSTRY DIRECTORY</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/partnerships'}>PARTNERSHIPS</Link></StyledListItmeSecondary>
              </List>
            </div>
            <div className="col-lg-2 col-md-4 mt-6 mt-lg-0 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start">
              <StyledTypographyh3Secondary variant="h3" >
              FEATURES
              </StyledTypographyh3Secondary>
              <List className="mt-4">
                <StyledListItmeSecondary><Link to={'/monitor'}>MONITOR</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/approve'}>APPROVE</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/report'}>REPORT</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/directory'}>DIRECTORY</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/#apiintegration'}>INTEGRATIONS</Link></StyledListItmeSecondary>
              </List>
            </div>
            <div className="col-lg-2 col-md-4 mt-6 mt-lg-0 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start">
              <StyledTypographyh3Secondary variant="h3" >
              ABOUT
              </StyledTypographyh3Secondary>
              <List className="mt-4">
                <StyledListItmeSecondary><Link to={'/#contact'}>CONTACT US</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/definitions'}>DEFINITIONS</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/privacy-policy'}>PRIVACY POLICY</Link></StyledListItmeSecondary>
                <StyledListItmeSecondary><Link to={'/terms-conditions'}>TERMS & CONDITIONS</Link></StyledListItmeSecondary>
              </List>
            </div>
            <div className="col-lg-3 justify-content-end d-flex flex-column text-end align-items-lg-end align-items-center mt-6 mt-lg-0">
              <ul className="social-list">
                <li><Link target="_blank" to={'https://www.instagram.com/socialpro.au/'}><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                <li><Link target="_blank" to={'https://www.linkedin.com/company/socialpro-app/'}><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
              </ul>
              <h6 className="coyright mt-6">SOCIALPRO<span>™ (2023)</span></h6>
            </div>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;
