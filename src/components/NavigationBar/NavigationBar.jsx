import styled from "styled-components";
import ProfilePicture from "../../assets/images/profile_picture.png";
import { StyledContainer } from "../Container/Container";

const StyledNavigationBar = styled.div`
  height: 4.188rem;
  background-color: white;
`;

const NavContent = styled(StyledContainer)`
  display: flex;
  padding-top: 1.063rem;
  padding-bottom: 1.063rem;
`;

const NavProfile = styled.div`
  margin-right: 0.813rem;
`;

const NavGreeting = styled.div`
  font-size: 0.75rem;
`;

const NavName = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const NavInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 0;
`;

function NavigationBar() {
  return (
    <StyledNavigationBar>
      <NavContent>
        <NavProfile>
          <img src={ProfilePicture} width="33" height="33" alt="Icon" />
        </NavProfile>
        <NavInfo>
          <NavGreeting>Good Morning</NavGreeting> <NavName>Fellas</NavName>
        </NavInfo>
      </NavContent>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
