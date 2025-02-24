import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import { mockedProducts } from "../Data";

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
  font-family: "Arial", sans-serif;
`;

const Textcontainer = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 20px;
  margin: 20px;
  font-family: "Arial", sans-serif;
  background-color: #cec8bc;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
  }
`;

export default function HomePage() {
  return (
    <>
      <div>
        <BackgroundDiv>
          <h1>Home Page</h1>
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
      <div>
        <section>
          <h2>lampor</h2>
          <div className="flex gap-2">
            {mockedProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
