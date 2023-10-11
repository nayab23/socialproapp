import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { Link } from 'react-router-dom';

const Monitor: React.FC = () => {
    return (
      <>
       <div className="home bg-1">
      <StyledContainer>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
          <StyledTypographyh1Secondary variant="h1" >
          Manage in one place
          </StyledTypographyh1Secondary>
            <img src={process.env.PUBLIC_URL + "/media/Long-Line.webp"} className="img-fluid heading-line my-6 w-500px w-md-400px w-sm-300px w-200px" />
          <StyledTypographyParagraphSecondary paragraph={true}>
          Easy to use, get up and running in minutes and save hours every month preparing and submitting social procurement spend. SocialPro is cloud-based so you can submit monthly reporting in the office or on the go on any device. 
          </StyledTypographyParagraphSecondary>
            <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4">
            <Link to={'/#contact'}><StyledButtonPrimary>Try SocialPro</StyledButtonPrimary></Link>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 px-lg-20 px-0 pr-0 d-flex justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL + "/media/3.webp"} className="img-fluid" />
          </div>
        </div>
      </StyledContainer>
    </div>
      <div className='py-20 bg-2'>
        <StyledContainer className='d-flex flex-column justify-content-center align-items-center'>
        <div className="d-flex flex-column align-items-center">
          <StyledTypographyh2Primary variant="h2" className="text-center">
          Improve data accuracy & completeness
          </StyledTypographyh2Primary>
          <StyledTypographyParagraphPrimary paragraph={true} className="text-center w-md-75 w-100 mt-6">
            With SocialPro, you can easily monitor and manage your subcontractors' progress towards social spend and hours targets, ensuring that your company is meeting its social procurement commitments.
          </StyledTypographyParagraphPrimary>
        </div>
        </StyledContainer>
      </div>
      </>
    );
  };
export default Monitor;
