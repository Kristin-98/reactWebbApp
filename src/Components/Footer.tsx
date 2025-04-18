import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <h3>Serene Interiors</h3>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, dolores! Minima modi mollitia, cumque fugit ipsa eveniet
          expedita praesentium repudiandae enim quo vero, molestias earum
          aliquam non autem at ratione?
        </span>
      </FooterSection>
      <FooterSection>
        <h3>SHOP</h3>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </FooterSection>
      <FooterSection>
        <h3>ABOUT</h3>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </FooterSection>
      <FooterSection>
        <h3>SOCIAL MEDIA</h3>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </FooterSection>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 20px;
  min-width: 200px;

  h3 {
    font-size: 1.1rem;
    color: #777;
    margin-bottom: 15px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  span {
    font-size: 0.8rem;
    color: #777;
    margin: 5px 0;
    cursor: pointer;
    transition: color 0.3s;
    width: 100%;
    text-align: center;

    &:hover {
      color: #000;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
