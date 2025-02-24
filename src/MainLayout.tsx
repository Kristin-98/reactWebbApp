import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
  }
`;

export default function MainLayout() {
  return (
    <>
      <GlobalStyle/>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
    
  );
}
