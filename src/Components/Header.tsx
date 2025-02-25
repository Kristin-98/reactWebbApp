import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <NavLinks>
      <Link to="/products">Products</Link>
        <span>Contact</span>
        <Link to="/about">About us</Link>
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

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #777;
  }
`;

const WelcomeText = styled.span`
  position: absolute;
  left: 680px;
  text-align: center;
`;
