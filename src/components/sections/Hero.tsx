import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
      <div className="home bg-1">
      <StyledContainer>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
          <StyledTypographyh1Secondary variant="h1" >
            Leading the way in Social Procurement
          </StyledTypographyh1Secondary>
            <img src={process.env.PUBLIC_URL + "/media/Long-Line.webp"} className="img-fluid heading-line my-6 w-500px w-md-400px w-sm-300px w-200px" />
          <StyledTypographyParagraphSecondary paragraph={true}>Leading the way in Social Procurement Cloud procurement software
              for reporting and monitoring social procurement spend and
              performance.</StyledTypographyParagraphSecondary>
            <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4">
            <a href={'/#contact'}><StyledButtonPrimary>Try SocialPro</StyledButtonPrimary></a>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 px-lg-20 px-0 pr-0 d-flex justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL + "/media/1.webp"} className="img-fluid" />
          </div>
        </div>
      </StyledContainer>
    </div>
    );
  };
export default Hero;
