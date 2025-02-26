import styled from "styled-components";
import Newsletter from "../Components/Newsletter";

export default function AboutPage() {
  return (
    <>
      <AboutContainer>
        <Text>
          <Title>Serene Interiors – Crafting Spaces, Elevating Lives</Title>
          At <strong>Serene Interiors</strong>, we believe that a beautifully
          designed space has the power to inspire, comfort, and transform. Our
          passion is creating elegant, harmonious interiors that reflect both
          style and functionality.
          <br />
          <br />
          With a keen eye for detail and a commitment to quality, we curate
          timeless designs that bring warmth and sophistication to every home.
          Whether you're looking for a complete makeover or subtle enhancements,
          Serene Interiors is here to turn your vision into reality.
          <br />
          <br />
          With a keen eye for detail and a commitment to quality, we curate
          timeless designs that bring warmth and sophistication to every home.
          Whether you're looking for a complete makeover or subtle enhancements,
          Serene Interiors is here to turn your vision into reality.
          <br />
          <br />
          Let us help you create a space that feels like home—serene, stylish,
          and uniquely yours.
        </Text>
        <StyledImage
          src="https://i0.wp.com/barkandchase.com/wp-content/uploads/2023/06/Jarch_A_magazine-worthy_cinematic_photograph_highly_detailed_ph_8ea68015-d606-4e4e-8390-0603ca3c4750.png?w=1024&ssl=1"
          alt="Serene Interiors Design"
        />
      </AboutContainer>
      <Newsletter />
    </>
  );
}

const AboutContainer = styled.div`
  align-items: center;
  margin: 50px auto;
  text-align: center;
  display: flex;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
  margin: 40px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 40rem;
  height: 40rem;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;
