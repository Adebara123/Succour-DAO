import styled from "styled-components";

export const NavbarContainer = styled.nav`
 position: fixed;
 width: 100%;
 height: ${(props) => (props.click ? "100vh" : "100px" )};
 background-color: black;
 display: flex;
 z-index: 1000;
 flex-direction: column;
`
export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 8%;
`;
export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height:  100px;
  display: flex;
`
export const NavbarLinkContainer = styled.div`
   display: flex;
   align-items: center;
`
export const NavbarLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  padding-left: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 165%;
  color: #AFAEAE;
  transition: all 400ms ease-in-out;
  /* margin: 19px; */
  margin-right: 40px;

  &:hover {
     color: #FFFFFF;
  }

   @media (max-width: 800px) {
     display: none;
  }
`
export const Logo = styled.div`
  margin: 10px;
  max-width: 180px;
  height: auto;
`
export const NavbarButton = styled.button`
  position: relative;
  width: 180px;
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  transition: all 200ms ease-out;
  border: 2px solid rgba(49, 7, 49, 0.8);
  border-width: 2px;
  border-radius: 30px;
  margin-right: 40px;

  @media (max-width: 700px) {
     display: none;
  }
`
export const NavbarButtonExtended = styled.button`
  position: relative;
  width: 180px;
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  transition: all 200ms ease-out;
  border: 2px solid var(--color-bg);
  border-radius: 30px;
`
export const NavbarUser = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer; 
     width: 64px;
     height: 64px;
     background: linear-gradient(120.83deg, #131313 0%, rgba(54, 53, 53, 0) 100%, rgba(54, 53, 53, 0) 100%);
     border-radius: 30px;

     @media(max-width: 700px) {
          display: none;
     }
`
export const NavbarUserExtended = styled.div`
     cursor: pointer; 
     width: 64px;
     height: 64px;
     background: linear-gradient(120.83deg, #131313 0%, rgba(54, 53, 53, 0) 100%, rgba(54, 53, 53, 0) 100%);
     border-radius: 30px;
     display: flex;
     align-items: center;
     justify-content: center;
`
export const NavbarLinkExtended = styled.a`
  cursor: pointer;
  font-weight: 500;
  padding-left: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 165%;
  color: #AFAEAE;
  transition: all 400ms ease-in-out;
  text-decoration: none;
  margin: 19px;

  &:hover {
     color: #FFFFFF;
  }
`
export const NavbarLinkRightContainer = styled.div`
 display: flex;
 margin-top: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
     display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 @media (min-width: 700px) {
     display: none;
 }

`