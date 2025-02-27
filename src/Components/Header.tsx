import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <NavLinks>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About us</Link>
      </NavLinks>
      <WelcomeText to="/">
        <h1>Serene Interiors</h1>
      </WelcomeText>
      <span>🔍</span>
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

const WelcomeText = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  text-align: center;
  color: #333;
  text-decoration: none;
`;
