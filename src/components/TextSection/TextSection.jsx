import styled, {css} from "styled-components";

const TextItem = styled.div`
  padding-bottom: 4.188rem;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const TextTitle = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.875rem;

  @media (min-width: 992px) {
    text-align: center;
  }
`;
const TextDescription = styled.div`
  color: white;
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: -0.036rem;


  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
  

  ${({card}) => card && css`
   max-width: inherit!important;
  `}

  @media (min-width: 992px) {
    max-width: 38.688rem;
    text-align: center;

    line-height: 1.688rem;
    font-size: 1.125rem;
    letter-spacing: -0.04rem;

    justify-content: center;
  }
 
`;

function TextSection({ name, description, card }) {
  return (
    <TextItem>
      <TextTitle>{name}</TextTitle>
      <TextDescription card={card}>{description}</TextDescription>
    </TextItem>
  );
}

export default TextSection;
