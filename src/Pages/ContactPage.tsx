import styled from "styled-components";
import Newsletter from "../Components/Newsletter";

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
          every step of the way. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quasi, quae modi? Tenetur officiis qui dolorum
          molestiae vero delectus doloribus. Consequuntur obcaecati ea est a
          molestias, optio nemo inventore. Placeat, quam?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit fugiat
          necessitatibus sapiente, facere dolores quod velit non tempore culpa
          voluptates modi illo mollitia praesentium rerum saepe ipsum atque
          inventore aliquam? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis eius fuga cumque ut autem tenetur, pariatur quisquam totam
          asperiores minima magnam, sequi earum quidem tempora deserunt libero
          corrupti rem assumenda! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Similique officia pariatur at temporibus modi
          quibusdam hic praesentium reiciendis libero odit repudiandae repellat
          deleniti, aliquam minima veritatis reprehenderit asperiores corporis
          velit?
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
      <Newsletter />
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const TextSection = styled.section`
  margin-bottom: 30px;
  text-align: left;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  margin-left: 180px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    padding: 5px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const StyledImage = styled.img`
  max-width: 35rem;
  height: 35rem;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 30rem;
    height: 30rem;
  }

  @media (max-width: 480px) {
    max-width: 20rem;
    height: 20rem;
  }
`;
