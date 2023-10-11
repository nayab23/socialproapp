import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";

const Partnerships: React.FC = () => {
    return (
      <>
      <div className="home bg-1">
        <StyledContainer className='d-flex flex-column justify-content-center align-items-center'>
            <StyledTypographyh1Secondary variant="h1" >
            Partnerships
            </StyledTypographyh1Secondary>
              <img src={process.env.PUBLIC_URL + "/media/Long-Line.webp"} className="img-fluid heading-line my-6 w-500px w-md-400px w-sm-300px w-200px" />
            <StyledTypographyParagraphSecondary paragraph={true} className='mt-6 w-lg-75 w-100 text-center'>
            Discover the power of SocialPro's platform to seamlessly connect principle contractors and sub-contractors with a wide range of verified local suppliers and manufacturers. Our national database simplifies the search for businesses by name, product, service, area, or category, enabling you to identify the perfect match for your specific needs.
            </StyledTypographyParagraphSecondary>
        </StyledContainer>
      </div>
      <div className='py-20 bg-2'>
        <StyledContainer className='d-flex flex-column justify-content-center align-items-center'>
          <div className="row w-100">
            <div className="col-lg-6 col-md-6 col-12"><div className='h-250px w-100 bg-gray-800 my-2'></div></div>
            <div className="col-lg-6 col-md-6 col-12"><div className='h-250px w-100 bg-gray-800 my-2'></div></div>
            <div className="col-lg-6 col-md-6 col-12"><div className='h-250px w-100 bg-gray-800 my-2'></div></div>
            <div className="col-lg-6 col-md-6 col-12"><div className='h-250px w-100 bg-gray-800 my-2'></div></div>
          </div>
        </StyledContainer>
      </div>
      </>
    );
  };
export default Partnerships;
