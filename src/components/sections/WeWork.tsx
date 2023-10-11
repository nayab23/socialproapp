import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { List } from '@mui/material';
import { Link } from 'react-router-dom';

const WeWork: React.FC = () => {
    return (
      <div className="bg-2" id="apiintegration">
        <div className="row m-0">
          <div className="col-lg-7 p-0">
            <div className="intro-video">
              <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src={process.env.PUBLIC_URL + "/media/intro.mp4"} data-wf-ignore="true" />
                  {/* <source src={process.env.PUBLIC_URL + "/media/intro.webm"} data-wf-ignore="true" /> */}
              </video>
            </div>
          </div>
          <div className="col-lg-5 px-4 px-sm-20 pr-0 py-15 bg-3">
            <StyledTypographyh3Primary variant="h3" >
              API INTEGRATION
            </StyledTypographyh3Primary>
            <StyledTypographyh2Primary variant="h2" className="mt-5 w-xl-75">
            We work the way you do
            </StyledTypographyh2Primary>
            <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
            <List>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Integrate key business tools. Seamlessly connect your existing</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>reporting platforms for construction management, finances and</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>eSignature so your systems talk to each other.</StyledListItmePrimary>
            </List>
            <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4">
              <a href='#contact'><StyledButtonPrimary>Discover more</StyledButtonPrimary></a>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
            </div>
          </div>
        </div>
      </div>

    );
  };
export default WeWork;