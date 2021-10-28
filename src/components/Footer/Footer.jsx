import styled from "styled-components";
import theme from "../../theme";
import Container from "../Container/Container";

const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  color: white;
`;

const FooterCopyright = styled.div`
  font-size: 0.75rem;

  span {
    font-weight: bold;
  }
`;

const FooterVersion = styled.div`
  font-size: 0.625rem;
  border: white solid 1px;
  padding: 0.188rem 0.5rem;
  border-radius: 1rem;
`;

const FooterContainer = styled.div`
  padding: 1.563rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
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
