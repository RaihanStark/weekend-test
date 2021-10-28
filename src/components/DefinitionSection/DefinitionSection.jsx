import styled from "styled-components";
import theme from "../../theme";

const StyledDefinition = styled.div`
  padding: 1.25rem 1.5rem;
  background-color: ${theme.colors.pink};
`;

const DefinitionText = styled.div`
  font-weight: 500;
  text-align: right;
  width: 100%;
  line-height: 1.5rem;
`;

const DefinitionName = styled.span`
  color: ${theme.colors.primary};
  font-weight: bold;
`;

function DefinitionSection() {
  return (
    <StyledDefinition>
      <DefinitionText>
        <DefinitionName>Definition;</DefinitionName> a practice or exercise to
        test or improve one's fitness for athletic competition, ability, or
        performance to exhaust (something, such as a mine) by working to devise,
        arrange, or achieve by resolving difficulties. Merriam-Webster.com
        Dictionary.
      </DefinitionText>
    </StyledDefinition>
  );
}

export default DefinitionSection;
