import styled from "styled-components";

const StyledBlackWave = styled.svg`
  width: 100%;
  position: absolute;
  top: 0;
  height: auto;
  z-index: 1;
`;

function BlackWave() {
  return (
    <StyledBlackWave
      width="1366"
      height="722"
      viewBox="0 0 1366 722"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1145.81 110.528C1047.73 75.4761 947.52 91.3205 892.15 182.829C836.78 274.337 862.508 447.944 664.5 471.222C466.492 494.5 441.591 542 399.457 622.798C299.188 815.081 0 667 0 667V0H1366V120.096C1366 120.096 1253.19 148.904 1145.81 110.528Z"
        fill="black"
      />
    </StyledBlackWave>
  );
}

export default BlackWave;
