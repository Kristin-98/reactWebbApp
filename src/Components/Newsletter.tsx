import { useState } from "react";
import styled from "styled-components";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setIsSubmitted(true);
  };

  return (
    <section>
      <Textcontainer>
        <div>
          <img
            src="https://media.royaldesign.se/1/vargen-thor-arvet-viggo-kastrullset-3-delar-0?quality=80&w=1920"
            alt="Lamp"
          />
        </div>
        <div>
          <h2>Join Our Newsletter and Stay Inspired!</h2>
          <p>
            Sign up for our newsletter and bring fresh inspiration into your
            home! Be the first to discover our latest collections, exclusive
            offers, and expert design tips. Whether you're looking for stylish
            decor ideas, seasonal trends, or special promotions, we've got you
            covered. Don't miss out—subscribe today and let us help you create a
            beautiful and inviting space!
          </p>
          {isSubmitted ? (
            <SuccessMessage>✅ Thank you for subscribing!</SuccessMessage>
          ) : (
            <form onSubmit={handleSubmit}>
              <NewsletterInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
              />
              <NewsletterBtn type="submit">Subscribe</NewsletterBtn>
            </form>
          )}
        </div>
      </Textcontainer>
    </section>
  );
}

const Textcontainer = styled.div`
  max-width: 100%;  
  text-align: center;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  background-color: #eae3d8;
  box-sizing: border-box;

  h2 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    padding: 20px;
    line-height: 1.6;
  }

  img {
    width: 100%;
    max-width: 350px;
    height: 200px;
    border-radius: 10px;
    margin: 20px auto;
  }

  div {
    display: inline-block;
  }

  
  @media (max-width: 768px) {
    padding: 15px;
    margin: 30px 20px;

    img {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 20px 10px;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }

    img {
      max-width: 280px;
    }
  }
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  width: 100%; /* Gör så inputfältet tar upp hela bredden på små skärmar */

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const NewsletterBtn = styled.button`
  padding: 10px 20px;
  background-color: rgb(71, 70, 70);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  width: auto;

  &:hover {
    background-color: rgb(49, 48, 48);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 10px;
 
 @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

