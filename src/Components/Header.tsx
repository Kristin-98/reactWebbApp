import styled from "styled-components";

const HeaderContainer = styled.header`
  background: white;
  color: black;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <span>Welcome</span>
      <NavLinks>
        <span>Products</span>
        <span>Contact</span>
        <span>About us</span>
      </NavLinks>
    </HeaderContainer>
  );
}
