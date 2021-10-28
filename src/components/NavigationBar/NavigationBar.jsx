import styled from "styled-components";
import ProfilePicture from "../../assets/images/profile_picture.png";
import Container from "../Container/Container";

const StyledNavigationBar = styled.div`
  height: 4.188rem;
  background-color: white;
`;

const NavContent = styled.div`
  display: flex;
  padding: 1.063rem 1.5rem;
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
      <Container>
        <NavContent>
          <NavProfile>
            <img src={ProfilePicture} width="33" height="33" alt="Icon" />
          </NavProfile>
          <NavInfo>
            <NavGreeting>Good Morning</NavGreeting> <NavName>Fellas</NavName>
          </NavInfo>
        </NavContent>
      </Container>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
