import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function MainLayout() {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Header />
        <Outlet />
        <Footer />
      </MainWrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    background-color: #f9f9f9;
    line-height: 1.6;
  }
`;

const MainWrapper = styled.main`
  width: 100%;  
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 100%;
  }
`;
