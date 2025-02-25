import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../Data";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  return (
    <CardLink to={`product/${props.product.slug}/${props.product.id}`}>
      <ProductImage src={props.product.images[0]} alt={props.product.name} />
      <ProductName>{props.product.name}</ProductName>
      <ProductPrice>{props.product.price.toLocaleString("sv-SE")} kr</ProductPrice>
      <ProductCategory>Lampor</ProductCategory>
    </CardLink>
  );
}

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 16px;
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
