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
  margin: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const CategoryItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    height: 35rem;
    width: 40rem;
    border-radius: 10px;
    display: block;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;

    &:hover {      
      transform: scale(1.02);
    }

    @media (max-width: 480px) {
      margin: 0;
    }
  }

  h3 {
    position: absolute;
    top: 75%;
    left: 30%;
    color: black;
    font-size: 1.3rem;
    font-weight: 300;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.8);
    transition: 0.5s;

    &:hover {      
      background-color: rgb(65, 65, 64);
      color: white;
    }

    @media (max-width: 480px) {
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.1rem;
      padding: 8px 16px;
    }
  }
`;
