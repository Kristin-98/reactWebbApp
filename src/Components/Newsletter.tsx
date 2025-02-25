import styled from "styled-components";

export default function Newsletter() {
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
          <NewsletterBtn>E-mail...</NewsletterBtn>
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

const NewsletterBtn = styled.div`
  font-size: 20px;
  color: #333;
  width: 500px;
  justify-content: center;
  background-color: rgb(251, 251, 251);
  text-align: center;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: #333;
  }
`;
