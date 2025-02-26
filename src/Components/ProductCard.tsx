import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../Data";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <CardLink to={`/product/${product.slug}/${product.id}`}>
      <ProductImage src={product.images[0]} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price.toLocaleString("sv-SE")} kr</ProductPrice>
      <ProductCategory>Category</ProductCategory>
      <FavoriteButton
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite();
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </FavoriteButton>
    </CardLink>
  );
}

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 16px;
  position: relative;
  border-radius: 8px;
  background-color: rgb(237, 232, 225);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  margin: 8px 0;
  font-size: 18px;
  color: #333;
`;

const ProductPrice = styled.span`
  color: #333;
`;

const ProductCategory = styled.span`
  font-size: 14px;
  color: #777;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
