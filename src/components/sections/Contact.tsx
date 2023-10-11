import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { List } from '@mui/material';

const Contact: React.FC = () => {
    return (
      <div className="bg-2 py-20 pt-0" id='contact'>
      <StyledContainer>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center px-4 px-sm-20 px-md-0">
            <StyledTypographyh3Primary variant="h3" >
              LET'S TALK
            </StyledTypographyh3Primary>
            <StyledTypographyh2Primary variant="h2" className="mt-5 w-xl-75">
            Contact us to learn more about
            </StyledTypographyh2Primary>
            <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
            <List>
            <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Requesting a Demo</StyledListItmePrimary>
            <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Plans & Pricing</StyledListItmePrimary>
            <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Product Capabilities</StyledListItmePrimary>
            <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Training & Support Services</StyledListItmePrimary>
            <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Business Solutions</StyledListItmePrimary>
            <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Software Integrations</StyledListItmePrimary>
          </List>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-md-20 px-4 pr-0">
            <form className="contact-form">
              <div className="d-flex flex-column mt-6">
                <label htmlFor="email" >Email*</label>
                <input type="text" id="email" placeholder="e.g., email@example.com" required/>
              </div>
              <div className="d-flex flex-column mt-6">
                <label htmlFor="email" >Subject</label>
                <input type="text" id="email" placeholder="e.g., Subject"/>
              </div>
              <div className="d-flex flex-column mt-6">
                <label htmlFor="email" >Your message</label>
                <textarea id="email" placeholder="Enter text here" className="h-100px"></textarea>
              </div>
            </form>
            <StyledButtonPrimary className="w-100">Send</StyledButtonPrimary>
          </div>
        </div>
      </StyledContainer>
    </div>
    );
  };
export default Contact;
