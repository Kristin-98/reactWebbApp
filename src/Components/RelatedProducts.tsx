import { Link } from "react-router-dom";
import styled from "styled-components";
import { mockedProducts } from "../Data";

interface Props {
  currentProductId: string;
}

export default function RelatedProducts({ currentProductId }: Props) {
  const relatedProducts = mockedProducts
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  return (
    <RelatedContainer>
      <h3>Related Products</h3>
      <ProductList>
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            to={`/product/${product.slug}/${product.id}`}
          >
            <ProductImage src={product.images[0]} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              {product.price.toLocaleString("sv-SE")} kr
            </ProductPrice>
          </ProductCard>
        ))}
      </ProductList>
    </RelatedContainer>
  );
}


const RelatedContainer = styled.div`
  margin: 40px;
  
  @media (max-width: 768px) {
    margin: 20px;
  }

  @media (max-width: 480px) {
    margin: 10px;
  }
`;

const ProductList = styled.div`
  display: flex;
  gap: 16px;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 16px;
  border-radius: 8px;
  background-color: rgb(237, 232, 225);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 15rem;

  &:hover {
    opacity: 0.7;
    color: #333;
    transition: transform 0.7s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 12rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  max-height: 200px;

  @media (max-width: 768px) {
    max-height: 150px;
  }

  @media (max-width: 480px) {
    max-height: 120px;
  }
`;

const ProductName = styled.p`
  font-size: 14px;
  color: #333;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ProductPrice = styled.span`
  font-size: 14px;
  color: #777;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

