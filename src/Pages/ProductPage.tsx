import { useParams } from "react-router-dom";
import styled from "styled-components";
import RelatedProducts from "../Components/RelatedProducts";
import { mockedProducts } from "../Data";

export default function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((a) => a.id === params.id);

  if (!product) {
    return <p>Error</p>;
  }

  return (
    <>
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
          <span>{product.price.toLocaleString("sv-SE")} kr</span>
          <AddToCart>Add To Cart</AddToCart>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos optio
            temporibus totam dolorum, molestias exercitationem possimus
            praesentium quod alias ratione rerum suscipit aspernatur quas a
            dicta dolorem saepe iste harum!
          </p>
        </ProductDetails>
      </PageContainer>
      <RelatedProductsContainer>
        <RelatedProducts currentProductId={product.id} />
      </RelatedProductsContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: #eae3d8;
  padding: 32px;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }
`;

const ProductDetails = styled.div`
  text-align: left;
  max-width: 400px;
  color: #777;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const SecondaryImagesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SecondaryImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ProductName = styled.h2`
  font-size: 24px;
  color: #333;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const AddToCart = styled.div`
  font-size: 20px;
  color: #333;
  background-color: rgb(251, 251, 251);
  text-align: center;
  margin: 40px 40px 40px 0;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: #333;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 12px;
  }
`;

const RelatedProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
