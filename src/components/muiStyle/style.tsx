import { styled } from '@mui/material/styles';
import { Avatar, Box, Button, Container, Input, InputLabel, ListItem, Typography } from '@mui/material';




// ******************* Container style *******************
export const StyledContainer= styled(Container)(
    ({ theme }) => `
        max-width: 1100px !important;
        @media (max-width: 411px) {
          padding: 0 15px;
        }
    `
  );

// ******************* Button *******************
export const StyledButtonPrimary = styled(Button)(
    ({ theme }) => `
    background: ${theme.palette.mode === "light" ? "#0063C6" : "#0063C6"};
    color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    padding: 17px 45px;
    font-size: 15px;
    line-height: 17px;
    font-weight: 700;
    border-radius: 8px;
    box-shadow: 0 1px 20px rgba(0,0,0,.2);
    text-transform: capitalize;
    &:hover{
        color: ${theme.palette.mode === "light" ? "#0063C6" : "#0063C6"};
        background: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    }
    @media (max-width: 411px) {
      padding: 17px 25px;
    }
    `
  );
export const StyledButtonSecondary = styled(Button)(
    ({ theme }) => `
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#0063C6"};
    background: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    padding: 17px 45px;
    font-size: 15px;
    line-height: 17px;
    font-weight: 700;
    border-radius: 8px;
    box-shadow: 0 1px 20px rgba(0,0,0,.2);
    text-transform: capitalize;
    &:hover{
        color: ${theme.palette.mode === "light" ? "#0063C6" : "#0063C6"};
        background: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    }
    @media (max-width: 411px) {
      padding: 17px 25px;
    }
    `
  );

// ******************* Typography Headings *******************
export const StyledTypographyh1Primary = styled(Typography)(
    ({ theme }) => `
    font-size: 63px;
    line-height: 67px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    @media (max-width: 773px) {
      font-size: 51px;
      line-height: 60px;
      letter-spacing: 0.05em;
    }
    `
  );
export const StyledTypographyh1Secondary = styled(Typography)(
    ({ theme }) => `
    font-size: 63px;
    line-height: 67px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    @media (max-width: 773px) {
      font-size: 51px;
      line-height: 60px;
      letter-spacing: 0.05em;
    }
    `
  );
export const StyledTypographyh2Primary = styled(Typography)(
    ({ theme }) => `
    font-size: 35px;
    line-height: 42px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    @media (max-width: 773px) {
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 0.04em;
    }
    `
  );
export const StyledTypographyh2Secondary = styled(Typography)(
    ({ theme }) => `
    font-size: 35px;
    line-height: 42px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    @media (max-width: 773px) {
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 0.04em;
    }
    `
  );
export const StyledTypographyh3Primary = styled(Typography)(
    ({ theme }) => `
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.18em;
    font-family: montserrat;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    `
  );
export const StyledTypographyh3Secondary = styled(Typography)(
    ({ theme }) => `
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.08em;
    font-family: montserrat;
    color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    `
  );


// ******************* Typography paragraph *******************

export const StyledTypographyParagraphPrimary = styled(Typography)(
    ({ theme }) => `
    font-size: 18px;
    line-height: 29px;
    font-weight: 300;
    letter-spacing: 0.01em;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    `
  );

export const StyledTypographyParagraphSecondary = styled(Typography)(
    ({ theme }) => `
    font-size: 18px;
    line-height: 29px;
    font-weight: 300;
    letter-spacing: 0.01em;
    color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    `
  );
  export const StyledTypographyParagraph2Primary = styled(Typography)(
    ({ theme }) => `
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.01em;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    `
  );




// ******************* Form Style *******************
export const StyledInputLabel = styled(InputLabel)(
    ({ theme }) => `
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    font-family: montserrat;
    translate(0px, 16px) scale(1) !important;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"} !important;
    `
  );
export const StyledInput = styled(Input)(
    ({ theme }) => `
    width: 100%;
    background: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    height: 50px;
    padding: 10px 25px;
    border-radius: 9px;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    &::after, &:before{
      display: none;
    }
    `
  );






// ******************* List Item Style *******************
export const StyledListItmePrimary = styled(ListItem)(
    ({ theme }) => `
    font-size: 15px;
    line-height: 21px;
    font-weight: 400;
    letter-spacing: 0.01em;
    padding: 0;
    list-style-type: disc;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    & i{
        font-size: 8px;
        margin: 0;
        padding: 0;
        margin-right: 7px;
        margin-top: 7px;
        color: ${theme.palette.mode === "light" ? "#0063C6" : "#ffffff"};
    }
    & span, & a{
      color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    }
    `
  );
export const StyledListItmeSecondary= styled(ListItem)(
    ({ theme }) => `
    font-size: 12px;
    line-height: 21px;
    font-weight: 600;
    letter-spacing: 0.01em;
    padding: 0;
    list-style-type: disc;
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    & i{
        font-size: 8px;
        margin: 0;
        padding: 0;
        margin-right: 7px;
        margin-top: 7px;
        color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    }
    & span, & a{
      color: ${theme.palette.mode === "light" ? "#ffffff" : "#ffffff"};
    }
    `
  );