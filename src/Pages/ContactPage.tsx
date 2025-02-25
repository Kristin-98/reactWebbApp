import styled from "styled-components";
import SpringSale from "../Components/SpringSale";

export default function ContactPage() {
  return (
    <ContactContainer>
      <TextSection>
        <Title>
          Get in Touch – Create Your Dream Home with Serene Interiors
        </Title>
        <Paragraph>
          Have questions about our services, need interior design advice, or
          want to book a consultation? We're here to help! At Serene Interiors,
          we are dedicated to creating harmonious and stylish spaces that
          reflect your personality and lifestyle. Whether you're planning a full
          home makeover or just looking to refresh your space, we’ll guide you
          every step of the way.
        </Paragraph>
        <Paragraph>
          📍 Visit us in our studio for inspiration and personalized
          consultations.
          <br /> 📞 Call us if you'd like to chat about your project.
          <br /> 📧 Email us and let’s bring your vision to life!
          <br /> We look forward to hearing from you!
        </Paragraph>
      </TextSection>
      <StyledImage
        src="https://images.prismic.io/royaldesign/f949fd56-f972-4ca1-9300-4893eb392299_tynnel.jpg?auto=compress,format&rect=0,0,2000,2667&w=1440&h=1920"
        alt="Serene Interiors Design"
      />
      <StyledImage
        src="https://images.prismic.io/royaldesign/a2448e97-a181-4630-8b45-c91162dd6ba3_gubi.jpg?auto=compress,format&rect=0,0,2000,2666&w=1440&h=1920"
        alt="Serene Interiors Design"
      />
      <SpringSale />
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  align-items: center;
  text-align: center;
  padding: 40px;
  margin: auto;
`;

const TextSection = styled.section`
  margin-bottom: 30px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 35rem;
  height: 35rem;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
