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
  position: relative;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
  }

  a:hover {
    color: #777;
  }

  @media (max-width: 768px) {
    gap: 10px;

    a {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 480px) {

    a {
      font-size: 0.5rem;
    }
  }
`;

const WelcomeText = styled(Link)`
  font-size: 1rem;  
  color: #333;
  position: absolute;
  left: 645px;
  text-decoration: none;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    text-align: center;
    display: contents;
    justify-content: center;
    align-items: center;
    order: -1;
  }
  
  @media (max-width: 480px) {
    font-size: 0.3rem;
    text-align: center;
    display: contents;
    justify-content: center;
    align-items: center;
  }
`;


