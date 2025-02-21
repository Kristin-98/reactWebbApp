import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #1e293b;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <span>Welcome</span>
        <span>Products</span>
        <span>Contact</span>
        <span>About us</span>
      </div>
    </HeaderContainer>
  );
}
