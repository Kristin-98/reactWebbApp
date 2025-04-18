import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryCard from "../Components/CategoryCard";
import Newsletter from "../Components/Newsletter";
import ProductCard from "../Components/ProductCard";
import SpringSale from "../Components/SpringSale";
import { mockedProducts } from "../Data";

export default function HomePage() {
  return (
    <PageWrapper>
      <div>
        <BackgroundDiv>
          <Link to="/products">
            <button>View Products</button>
          </Link>
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
      <Section>
        <SpringSale />
      </Section>
      <section>
        <StyledHeading>Popular Products</StyledHeading>
        <ProductGrid>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </section>
      <CategoryCard />
      <Newsletter />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const BackgroundDiv = styled.div`
  height: 80vh;
  width: 100%;
  background-image: url("https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/02/interior-designers-near-me-scaled.jpeg?width=900");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  button {
    all: unset;
    display: inline-block;
    width: 150px;
    text-align: center;
    border: 1px solid black;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
    color: black;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      background-color: rgb(65, 65, 64);
      color: white;
    }
  }
`;

const Textcontainer = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 20px;
  height: auto;
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

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

const Section = styled.section`
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
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
  margin: 10px;
  font-weight: bold;
`;
