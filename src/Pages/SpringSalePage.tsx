import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Newsletter from "../Components/Newsletter";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const SpringSalePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSpringSalePage = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      const springProducts = data.filter(
        (product) =>
          product.category === "men's clothing" ||
          product.category === "jewelery"
      );
      setProducts(springProducts);
      setLoading(false);
    };

    fetchSpringSalePage();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <PageContainer>
      <Title>Spring Sale</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price} KR</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
      <Newsletter />
    </PageContainer>
  );
};

export default SpringSalePage;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  padding-bottom: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #eae3d8;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProductPrice = styled.strong`
  font-size: 1.2rem;
  color: #333;
`;
