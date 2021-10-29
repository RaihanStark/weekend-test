import styled from "styled-components";

const TextItem = styled.div`
  padding-bottom: 4.188rem;
`;
const TextTitle = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.875rem;
`;
const TextDescription = styled.div`
  color: white;
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: -0.57px;
`;

function TextSection({ name, description }) {
  return (
    <TextItem>
      <TextTitle>{name}</TextTitle>
      <TextDescription>{description}</TextDescription>
    </TextItem>
  );
}

export default TextSection;
