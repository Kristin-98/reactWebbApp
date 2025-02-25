import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import { mockedProducts } from "../Data";

export default function AllProductsPage() {
  return (
    <PageContainer>
      <section>
        <Title>Our products</Title>
        <ProductGrid>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </section>
      <section>
        <ProductGrid>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </section>
      <section>
        <ProductGrid>
          {mockedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </section>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

