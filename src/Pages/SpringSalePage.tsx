import React, { useEffect, useState } from "react";

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
    <div>
      <h2>Spring Sale</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <strong>{product.price} KR</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpringSalePage;
