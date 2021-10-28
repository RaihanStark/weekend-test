import styled from "styled-components";

const StyledContainer = styled.div`
  /* padding: 1.063rem 1.5rem; */
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
