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
  margin: 70px 30px;
  display: flex;
  background-color: #eae3d8;

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
    width: 350px;
    height: 250px;
    border-radius: 10px;
  }

  div {
    display: inline-block;
  }
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
`;

const NewsletterBtn = styled.button`
  padding: 10px 20px;
  background-color: rgb(71, 70, 70);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(49, 48, 48);
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
`;
