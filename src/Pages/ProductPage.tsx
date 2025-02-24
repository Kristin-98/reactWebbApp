import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mockedProducts } from "../Data";

export default function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((a) => a.id === params.id);

  if (!product) {
    return <p>Error</p>;
  }

  return (
    <PageContainer>
      <ProductImage src={product.imageUrl} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <p>Beskrivning av produkten</p>
      </ProductDetails>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eae3d8;
  padding: 32px;
  gap: 32px;
`;

const ProductDetails = styled.div`
  text-align: left;
  max-width: 400px;
`;


const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h2`
  font-size: 24px;
  color: #333;
`;

