import styled from "styled-components";

const BackgroundDiv = styled.div`
  height: 600px;
  width: 100%;
  background-image: url("https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/02/interior-designers-near-me-scaled.jpeg?width=900");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export default function HomePage() {
  return (
    <>
      <BackgroundDiv>
        <h1>Home Page</h1>
      </BackgroundDiv>
    </>
  );
}

