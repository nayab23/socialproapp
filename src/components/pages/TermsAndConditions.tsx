import React, { Component } from 'react';
import { StyledContainer, StyledButtonPrimary,StyledInputLabel, StyledButtonSecondary,StyledInput, StyledListItmePrimary, StyledTypographyParagraphPrimary, StyledTypographyParagraphSecondary, StyledTypographyh1Primary, StyledTypographyh1Secondary, StyledTypographyh2Primary, StyledTypographyParagraph2Primary, StyledTypographyh3Primary, StyledListItmeSecondary, StyledTypographyh3Secondary } from "../muiStyle/style";

const TermsAndConditions: React.FC = () => {
    return (
      <>
        <div className="bg-2 py-20 mt-20">
          <StyledContainer>
            <div className="d-flex flex-column align-items-center">
              <StyledTypographyh2Primary variant="h2" className="mt-5">
                Terms & Conditions of Use
              </StyledTypographyh2Primary>
              <img
                src={process.env.PUBLIC_URL + "/media/heading-bottom-line.webp"}
                className="img-fluid w-300px heading-line2 my-4"
              />
            </div>
            <p className="text-primary mt-8 mb-0">
              <b>1. Terms</b>
            </p>
            <p className="text-primary mt-1">
              By accessing this Website, accessible from www.socialpro.com, you
              are agreeing to be bound by these Website Terms and Conditions of
              Use and agree that you are responsible for the agreement with any
              applicable local laws. If you disagree with any of these terms,
              you are prohibited from accessing this site. The materials
              contained in this Website are protected by copyright and trade
              mark law.
            </p>
            <p className="text-primary mt-8 mb-0">
              <b>2. Use License</b>
            </p>
            <p className="text-primary mt-1">Permission is granted to temporarily download one copy of the materials on SocialPro's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on SocialPro's Website; remove any copyright or other proprietary notations from the materials; or transferring the materials to another person or "mirror" the materials on any other server. This will let SocialPro to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
            
            <p className="text-primary mt-8 mb-0">
              <b>3. Disclaimer</b>
            </p>
            <p className="text-primary mt-1">All the materials on SocialPro’s Website are provided "as is". SocialPro makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, SocialPro does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
            <p className="text-primary mt-8 mb-0">
              <b>4. Limitations</b>
            </p>
            <p className="text-primary mt-1">SocialPro or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on SocialPro’s Website, even if SocialPro or an authorise representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
            <p className="text-primary mt-8 mb-0">
              <b>5. Revisions and Errata</b>
            </p>
            <p className="text-primary mt-1">The materials appearing on SocialPro’s Website may include technical, typographical, or photographic errors. SocialPro will not promise that any of the materials in this Website are accurate, complete, or current. SocialPro may change the materials contained on its Website at any time without notice. SocialPro does not make any commitment to update the materials.</p>
            <p className="text-primary mt-8 mb-0">
              <b>6. Links</b>
            </p>
            <p className="text-primary mt-1">SocialPro has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by SocialPro the site. The use of any linked website is at the user’s own risk.</p>
            <p className="text-primary mt-8 mb-0">
              <b>7. Site Terms of Use Modifications</b>
            </p>
            <p className="text-primary mt-1">SocialPro may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
            <p className="text-primary mt-8 mb-0">
              <b>8. Your Privacy</b>
            </p>
            <p className="text-primary mt-1">Please read our Privacy Policy.</p>
            <p className="text-primary mt-8 mb-0">
              <b>9. Governing Law</b>
            </p>
            <p className="text-primary mt-1">Any claim related to SocialPro's Website shall be governed by the laws of us without regards to its conflict of law provisions.</p>
          </StyledContainer>
        </div>
      </>
    );
  };
export default TermsAndConditions;
