import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: auto;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: calc(923px - -80px);
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: calc(1200px - 200px);
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
