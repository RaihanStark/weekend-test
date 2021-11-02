import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import theme from "../../theme";
import HeroSection from "../../components/HeroSection/HeroSection";
import DefinitionSection from "../../components/DefinitionSection/DefinitionSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import TextSection from "../../components/TextSection/TextSection";
import HelpSection from "../../components/HelpSection/HelpSection";

import LegoLeft from "../../assets/images/lego_left.png";
import BackgroundHeroImage from '../../assets/images/background_hero.png'

const StyledLegoLeft = styled.img`
  position: absolute;
  left: 0;
`;

const BlackSection = styled.div`
  background-color: black;
  padding: 0 2rem 21.063rem 2rem;
`;

const StyledLandingPage = styled.div`
  background-color: ${theme.colors.pink};
  height: 100vh;
`;

const StyledBackgroundImages = styled.img`
  position: absolute;
`

const StyledLegoLeftContainer = styled.div`
    height: 8.4rem;

`

function LandingPage() {
  return (
    <StyledLandingPage>
      <NavigationBar />
      <div>
        <HeroSection />
        <DefinitionSection />
        <BlackSection>
          <TestimonialSection />
          <TextSection
            name="POV"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
          <TextSection
            name="Resource"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
          <HelpSection />
          <TextSection
            name="You're all set"
            description="The wise man therefore always holds in these matters to this principle of selection."
          />
{/* 
          <StyledLegoLeftContainer>
            <StyledLegoLeft
              src={LegoLeft}
              width="253"
              height="337"
              alt="lego on left"
              srcset=""
            />
          </StyledLegoLeftContainer> */}
          
        </BlackSection>
      </div>
      <Footer />
    </StyledLandingPage>
  );
}

export default LandingPage;
