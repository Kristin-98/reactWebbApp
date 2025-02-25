import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import SpringSale from "../Components/SpringSale";
import { mockedProducts } from "../Data";

export default function HomePage() {
  return (
    <>
      <div>
        <BackgroundDiv>
          <h1>Serene Interior</h1>
        </BackgroundDiv>
        <Textcontainer>
          <h2>Creating unique spaces to live, work and play</h2>
          <p>
            Transform your space into a haven of elegance and sophistication. We
            believe that luxury is more than just aesthetics—it’s a feeling. Our
            modern, high-end designs bring together timeless beauty, comfort,
            and functionality to create spaces that inspire and elevate your
            lifestyle. From sleek minimalism to bold statement pieces, every
            detail is carefully curated to reflect your personality and
            aspirations. Whether you’re redesigning your home, office, or a
            bespoke living space, we bring your vision to life with exquisite
            craftsmanship and a touch of indulgence. Step into a world where
            design meets desire.
          </p>
        </Textcontainer>
      </div>
      <section>
        <SpringSale />
      </section>
      <section>
        <StyledHeading>Popular Products</StyledHeading>
        <ProductGrid>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </section>
      <section>
        <Textcontainer>
          <h2>Join Our Newsletter and Stay Inspired!</h2>
          <p>
            Sign up for our newsletter and bring fresh inspiration into your
            home! Be the first to discover our latest collections, exclusive
            offers, and expert design tips. Whether you're looking for stylish
            decor ideas, seasonal trends, or special promotions, we've got you
            covered. Don't miss out—subscribe today and let us help you create a
            beautiful and inviting space!
          </p>
        </Textcontainer>
      </section>
    </>
  );
}

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

const Textcontainer = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 20px;
  height: 200px;
  margin: 30px;
  background-color: #eae3d8;

  h2 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StyledHeading = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 60px;
  font-weight: bold;
`;
