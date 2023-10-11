import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { List } from '@mui/material';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
    return (
      <div className="bg-2 py-15">
      <StyledContainer>
        <div className="d-flex flex-column align-items-center">
          <StyledTypographyh2Primary variant="h2" className="text-center">
          Improve data accuracy & completeness
          </StyledTypographyh2Primary>
          <StyledTypographyParagraphPrimary paragraph={true} className="text-center w-md-75 w-100 mt-6">
            With SocialPro, you can easily monitor and manage your subcontractors' progress towards social spend and hours targets, ensuring that your company is meeting its social procurement commitments.
          </StyledTypographyParagraphPrimary>
        </div>

        <div className="row mt-lg-20 mt-10"  id='monitor'>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center px-4 px-sm-20 px-md-0">
            <StyledTypographyh3Primary variant="h3" >
            MONITOR
            </StyledTypographyh3Primary>
            <StyledTypographyh2Primary variant="h2" className="mt-5 w-xl-75">
            Manage & review in one place
            </StyledTypographyh2Primary>
            <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
            <List>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Easy setup and quick implementation</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Time-saving solution for social procurement spend reporting</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Cloud-based platform accessible from any device</StyledListItmePrimary>
            </List>
            <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4">
            <Link to={'/monitor'}><StyledButtonPrimary>Discover more</StyledButtonPrimary></Link>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-sm-12 px-lg-20 px-4 pr-0 d-flex justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL + "/media/3.webp"} className="img-fluid" />
          </div>
        </div>

        <div className="row d-flex flex-column-reverse flex-md-row" id="approve">
          <div className="col-lg-6 col-md-6 col-sm-12 col-sm-12 px-lg-20 px-4 pl-0 d-flex justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL + "/media/4.webp"} className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center px-4 px-sm-20 px-md-0">
            <StyledTypographyh3Primary variant="h3" >
            APPROVE
            </StyledTypographyh3Primary>
            <StyledTypographyh2Primary variant="h2" className="mt-5">
            Assess & Certify
            </StyledTypographyh2Primary>
            <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
        
            <List>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Efficient target management and resolution</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Track reporting with reminders and upload supporting documents</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>nstantly share reporting information and attachments with approvers</StyledListItmePrimary>
            </List>
            <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4 mt-8">
            <Link to={'/approve'}><StyledButtonPrimary>Discover more</StyledButtonPrimary></Link>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
            </div>
          </div>
        </div>

        <div className="row" id='report'>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center px-4 px-sm-20 px-md-0">
            <StyledTypographyh3Primary variant="h3" >
            REPORT
            </StyledTypographyh3Primary>
            <StyledTypographyh2Primary variant="h2" className="mt-5 w-xl-75">
            Manage & review in one place
            </StyledTypographyh2Primary>
            <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
            <List>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Quick and easy setup</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Time-saving solution for social procurement reporting</StyledListItmePrimary>
              <StyledListItmePrimary><i className="fa fa-circle" aria-hidden="true"></i>Cloud-based platform</StyledListItmePrimary>
            </List>
            <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4">
            <Link to={'/report'}><StyledButtonPrimary>Discover more</StyledButtonPrimary></Link>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-sm-12 px-lg-20 px-0 pr-4 d-flex justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL + "/media/2.webp"} className="img-fluid" />
        </div>

        </div>

      </StyledContainer>
    </div>
    
    );
  };
export default Features;
