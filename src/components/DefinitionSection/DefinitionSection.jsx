import styled from "styled-components";
import theme from "../../theme";
import LegoRight from "../../assets/images/lego_right.png";
import Oval from "../../icon-components/Oval";

const StyledDefinition = styled.div`
  /* padding: 1.25rem 1.5rem; */
  padding: 9.5rem 1.5rem 1.25rem 1.5rem;
  background-color: ${theme.colors.pink};
  position: relative;
`;

const DefinitionText = styled.div`
  margin-top: 13.813rem;
  font-weight: 500;
  text-align: right;
  width: 100%;
  line-height: 1.5rem;

  max-width: 600px;
  margin: auto;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 1.313rem;
    line-height: 2rem;
  }
`;

const DefinitionName = styled.span`
  color: ${theme.colors.primary};
  font-weight: bold;
`;

const DefinitionAuthor = styled.p`
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  color: white;
  text-align: right;
  margin-top: 1.25rem;
  margin-bottom: 2.375rem;

  max-width: 600px;

  margin-left: auto;
  margin-right: auto;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 1.313rem;
  }
`;

const LegoRightImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const CircleSvgContainer = styled.div`
  position: relative;
  height: 9.938rem;
  svg {
    position: absolute;

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      left: 16.188rem;
    }
  }
`

function DefinitionSection() {
  return (
    <StyledDefinition>
      <LegoRightImage src={LegoRight} alt="Lego on Right" />
      <DefinitionText>
        <DefinitionName>Definition;</DefinitionName> a practice or exercise to
        test or improve one's fitness for athletic competition, ability, or
        performance to exhaust (something, such as a mine) by working to devise,
        arrange, or achieve by resolving difficulties. Merriam-Webster.com
        Dictionary.
      </DefinitionText>
      <DefinitionAuthor>-weekend team</DefinitionAuthor>

      <CircleSvgContainer>
        <Oval/>
      </CircleSvgContainer>
      
    </StyledDefinition>
  );
}

export default DefinitionSection;
