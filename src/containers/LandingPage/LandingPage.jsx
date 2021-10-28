import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

const StyledLandingPage = styled.div`
  background-color: black;
  height: 100vh;
`;

function LandingPage() {
  return (
    <StyledLandingPage>
      <NavigationBar />
      <Footer />
    </StyledLandingPage>
  );
}

export default LandingPage;
