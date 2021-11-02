import styled from "styled-components";
import theme from "../../theme";
import Container from "../Container/Container";
import LegoLeft from "../../assets/images/lego_left.png";

const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  color: white;
  position: relative;
`;

const FooterCopyright = styled.div`
  font-size: 0.75rem;

  span {
    font-weight: bold;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const FooterVersion = styled.div`
  font-size: 0.625rem;
  border: white solid 1px;
  padding: 0.188rem 0.5rem;
  border-radius: 1rem;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
  }
`;

const FooterContainer = styled.div`
  padding: 1.563rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLegoLeftContainer = styled.div`
    height: 8.4rem;
`

const StyledLegoLeft = styled.img`
  position: absolute;
  left: 0;
  top: -337px;

  width: 253px;
  height: 337px;

  @media (min-width: 992px) {
    width: 244px;
    height: 325px;
    top: -325px;
  }
`;


function Footer() {
  return (
    <StyledFooter>
      <StyledLegoLeft
          src={LegoLeft}
          alt="lego on left"
          srcset=""
      />
      <Container>
        <FooterContainer>
          <FooterCopyright>
            <span>wknd@</span>2020
          </FooterCopyright>
          <FooterVersion>alpha version 0.1</FooterVersion>
        </FooterContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
