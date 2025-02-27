import styled from "styled-components";

export default function CategoryCard() {
  return (
    <>
      <CategoryStyle>
        <CategoryItem>
          <img
            src="https://media.royaldesign.se/1/design-house-stockholm-aria-soffbord-50-lagt-25?quality=80&w=1920"
            alt="table"
          />
          <h3>Explore Furniture</h3>
        </CategoryItem>
        <CategoryItem>
          <img
            src="https://media.royaldesign.se/1/decotique-le-petite-sittpuff-11?quality=80&w=1920"
            alt="pillow"
          />
          <h3>Explore Textiles</h3>
        </CategoryItem>
      </CategoryStyle>
    </>
  );
}

const CategoryStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CategoryItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    margin: 40px 10px 0px 0px;
    height: 35rem;
    width: 40rem;
    border-radius: 10px;
    display: block;

    &:hover {      
      transform: scale(1.02);
      transition: transform 0.2s ease-in-out;
    }
  }

  h3 {
    position: absolute;
    top: 75%;
    left: 30%;
    color: black;
    font-size: 1.3rem;
    font-weight: light;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {      
      background-color: rgb(65, 65, 64);
      color: white;
    }
  }
`;
