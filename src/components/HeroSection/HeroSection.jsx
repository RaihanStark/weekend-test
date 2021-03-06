import styled from "styled-components";
import BackgroundHeroImage from '../../assets/images/background_hero.png'
import LegoPng from "../../assets/images/lego.png";

const StyledHero = styled.div`
  position: relative;
  background-image: url(${BackgroundHeroImage});
  
  background-position: center -4.188rem;
 
  background-repeat: no-repeat;
  text-align: center;

  color: white;

  padding-left: 1.063rem;
  padding-right: 1.063rem;
  padding-bottom: 1.25rem;

  @media (min-width: 656px) {
    height: 45.714rem;
    padding-bottom: 0rem;
  }


  /* @media (min-width: 992px) {
    height: 45.714rem;
    padding-bottom: 0rem;
  } */
`;

const HeroTitle = styled.h1`
  padding-top: 4.188rem;
  font-size: 3.25rem;
  font-weight: 900;
`;

const HeroDescription = styled.p`
  padding-top: 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 1.313rem;
  }
`;

const LegoImage = styled.img``;

const LegoContainer = styled.div`
  position: relative;
  margin-top: 4.188rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  padding: 1.25rem 5.25rem;
  border: none;
  background-color: white;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 50px;
  right: 0;
  left: -25px;
  width: max-content;

  cursor: pointer;
`;

function HeroSection() {
  return (
    <StyledHero>
      <HeroTitle>WEEKEND FROM HOME</HeroTitle>
      <HeroDescription>Stay active with a little workout</HeroDescription>
      <LegoContainer>
        <LegoImage width="184" height="305" src={LegoPng} alt="Lego Figure" />
        <Button>Let's Go</Button>
      </LegoContainer>
    </StyledHero>
  );
}

export default HeroSection;
