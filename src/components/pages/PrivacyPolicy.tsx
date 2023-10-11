import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";

const PrivacyPolicy: React.FC = () => {
    return (
      <>
      
      <div className="bg-2 py-20 mt-20">
      <StyledContainer>
        <div className="d-flex flex-column align-items-center">
            <StyledTypographyh2Primary variant="h2" className="mt-5">
                Privacy Policy
            </StyledTypographyh2Primary>
            <img src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"} className="img-fluid w-300px heading-line2 my-4" />
        </div>
        <p className='text-primary mt-10'>
            At SocialPro, we value the privacy of our users. This document outlines the types of information we collect and how we use it.
        </p>
        <p className='text-primary mt-8 fw-100'>If you have any questions or need additional information, please don't hesitate to contact us.</p>
        <p className='text-primary mt-8 fw-100'>This privacy policy applies only to our online activities and is applicable to information shared and/or collected on our website. It does not apply to information collected offline or through channels other than our website.</p>
        <p className='text-primary mt-8 fw-100'>By using our website, you consent to our privacy policy and agree to its terms.</p>
        <p className='text-primary mt-8 mb-0'><b>Information We Collect</b></p>
        <p className='text-primary mt-1'>We collect personal information to provide you with a better experience when using our website. We will clearly state the reason for collecting your personal information at the time it is requested.</p>
        <p className='text-primary mt-8 fw-100'>If you contact us directly, we may collect additional information about you, such as your name, email address, phone number, and any other information you choose to provide.</p>
        <p className='text-primary mt-8 fw-100'>When you register for an account, we may ask for your contact information, including your name, company name, address, email address, and phone number.</p>
        <p className='text-primary mt-8 mb-0'><b>How We Use Your Information</b></p>
        <ul className='text-primary'>
            <li>We use the information we collect in various ways, including to:</li>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalise, and expand our website</li>
            <li>Understand and analyse how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
        </ul>
        <p className='text-primary mt-8 mb-0'><b>Log Files</b></p>
        <p className='text-primary mt-1 fw-100'>We use log files to collect information about visitors to our website. This information includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This information is not personally identifiable and is used to analyse trends, administer the site, track user movements on the website, and gather demographic information.</p>

        <p className='text-primary mt-8 mb-0'><b>Cookies and Web Beacons</b></p>
        <p className='text-primary mt-1 fw-100'>We use cookies to store information about your preferences and the pages you visit on our website. This information is used to optimise your experience by customising our web page content based on your browser type and/or other information.</p>
        <p className='text-primary mt-8 mb-0'><b>Advertising Partners Privacy Policies</b></p>
        <p className='text-primary mt-1 fw-100'>You may consult this list to find the Privacy Policy for each of our advertising partners. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their advertisements and links. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalise the advertising content that you see on websites that you visit.</p>
        <p className='text-primary mt-8 fw-100'>Please note that SocialPro has no access to or control over these cookies that are used by third-party advertisers.</p>
        <p className='text-primary mt-8 mb-0'><b>Third Party Privacy Policies</b></p>
        <p className='text-primary mt-1 fw-100'>Our Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information, including their practices and instructions on how to opt-out of certain options.</p>
        <p className='text-primary mt-8 fw-100'>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
        <p className='text-primary mt-8 mb-0'><b>CCPA Privacy Rights</b>(Do Not Sell My Personal Information)</p>
        <p className='text-primary mt-1 fw-100'>Under the CCPA, California consumers have the right to request that a business that collects their personal data disclose the categories and specific pieces of personal data that have been collected, request that the data be deleted, and request that the data not be sold. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        <p className='text-primary mt-8 mb-0'><b>GDPR Data Protection Rights</b></p>
        <p className='text-primary mt-1 fw-100'>We want you to be fully aware of your data protection rights. Every user is entitled to the following:</p>
        <p className='text-primary mt-8 fw-100'>The right to access – You have the right to request copies of your personal data that we hold. We may charge you a small fee for this service.</p>
        <p className='text-primary mt-8 fw-100'>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.</p>
        <p className='text-primary mt-8 fw-100'>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p className='text-primary mt-8 fw-100'>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p className='text-primary mt-8 fw-100'>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p className='text-primary mt-8 fw-100'>The right to data portability – You have the right to request that we transfer the data that we have collected to another organisation, or directly to you, under certain conditions.</p>
        <p className='text-primary mt-8 fw-100'>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at [insert contact details].</p>
      </StyledContainer>
    </div>
      </>
    );
  };
export default PrivacyPolicy;
