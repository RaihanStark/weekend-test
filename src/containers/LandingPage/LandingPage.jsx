import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import theme from "../../theme";
import HeroSection from "../../components/HeroSection/HeroSection";
import Container from "../../components/Container/Container";
import DefinitionSection from "../../components/DefinitionSection/DefinitionSection";

const StyledLandingPage = styled.div`
  background-color: ${theme.colors.pink};
  height: 100vh;
`;

function LandingPage() {
  return (
    <StyledLandingPage>
      <NavigationBar />
      <Container>
        <HeroSection />
        <DefinitionSection />
      </Container>
      <Footer />
    </StyledLandingPage>
  );
}

export default LandingPage;
