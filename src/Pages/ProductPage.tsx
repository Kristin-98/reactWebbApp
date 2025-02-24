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
      <ImageSection>
        <MainImage src={product.images[0]} alt={product.name} />
        <SecondaryImagesContainer>
          {product.images.slice(1).map((image, index) => (
            <SecondaryImage key={index} src={image} />
          ))}
        </SecondaryImagesContainer>
      </ImageSection>
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

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
`;
const SecondaryImagesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const SecondaryImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const ProductName = styled.h2`
  font-size: 24px;
  color: #333;
`;
