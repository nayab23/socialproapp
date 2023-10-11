import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";
import { Link } from 'react-router-dom';

const Searchconnect: React.FC = () => {
    return (
      <div className="bg-2 py-10" id='directory'>
        <StyledContainer>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center px-4 px-sm-20 px-md-0">
              <StyledTypographyh3Primary variant="h3" >
                INDUSTRY DIRECTORY
              </StyledTypographyh3Primary>
              <StyledTypographyh2Primary variant="h2" className="mt-5 w-xl-75">
                Search & connect
              </StyledTypographyh2Primary>
              <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
              <StyledTypographyParagraph2Primary paragraph={true} className="mt-1">
                SocialPro connects principle contractors and sub-contractors with local suppliers and manufacturers through a national database of verified businesses. Simply search by business name, product, service, area, or category.
              </StyledTypographyParagraph2Primary>
              <StyledTypographyParagraph2Primary paragraph={true} className="mt-5">
                The directory identifies best-fit products and services where there is local capability to manufacture, supply and value add.
              </StyledTypographyParagraph2Primary>
              <div className="d-flex gap-lg-6 mt-lg-12 mt-7 gap-2 gap-sm-4">
              <Link to={'/directory'}><StyledButtonPrimary>Discover more</StyledButtonPrimary></Link>
              <Link to={'/request-a-demo'}><StyledButtonSecondary>Request a demo</StyledButtonSecondary></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 px-lg-20 px-4 pl-0 d-flex justify-content-center align-items-center">
              <img src={process.env.PUBLIC_URL + "/media/1.webp"} className="img-fluid" />
            </div>
          </div>
        </StyledContainer>
      </div>
    );
  };
export default Searchconnect;