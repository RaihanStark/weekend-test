import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: auto;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    max-width: calc(576px - 30px);
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: calc(688px -30px);
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: calc(923px - 30px);
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: calc(1200px - 30px);
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    max-width: calc(1400px - 30px);
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
