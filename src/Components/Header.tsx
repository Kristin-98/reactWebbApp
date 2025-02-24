import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <NavLinks>
        <span>Products</span>
        <span>Contact</span>
        <span>About us</span>
      </NavLinks>
      <WelcomeText>Serene Interiors</WelcomeText>
      <span>🔍🗑</span>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: white;
  color: black;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const WelcomeText = styled.span`
  position: absolute;
  left: 680px;
  text-align: center;
`;
