import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SpringSale() {
  return (
    <StyledLink to="/spring">
      <SaleContainer>
        <TextSection>
          <Title>Serene Interiors – Spring Sale is Here!</Title>
          <Paragraph>
            At <strong>Serene Interiors</strong>, we believe that a beautifully
            designed space has the power to inspire, comfort, and transform. Our
            passion is creating elegant, harmonious interiors that reflect both
            style and functionality.
          </Paragraph>
          <Paragraph>
            Let us help you create a space that feels like home—serene, stylish,
            and uniquely yours.
          </Paragraph>
          <StyledButton>Spring Sale</StyledButton>
        </TextSection>
        <StyledImage
          src="https://media.royaldesign.se/1/georg-jensen-bloom-botanica-vas-20"
          alt="Serene Interiors Spring Sale"
        />
      </SaleContainer>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  color: inherit;
  display: block;
  border-radius: 10px;
  &:hover {
    transform: scale(1.02);
  }
`;

const SaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  height: 500px;
  border-radius: 10px;
  margin: 60px;
  background-color: #2e2d2d;
`;

const TextSection = styled.section`
  flex: 1;
  max-width: 600px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: #eae3d8;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #eae3d8;
  margin-bottom: 15px;
`;

const StyledImage = styled.img`
  width: 600px;
  border-radius: 10px;
  height: 450px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  align-items: center;
  color: #black;
  background: #eae3d8;
  border-color: none;
  border-radius: 10px;
  width: 20rem;
  height: 3rem;
  cursur: pointer;
  font-weight: bold;
`;
