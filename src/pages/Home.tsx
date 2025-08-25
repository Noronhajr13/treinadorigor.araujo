import React from 'react';
import styled from 'styled-components';
import { siteData } from '../config/siteData';
import { Button, Card, Grid } from '../styles/GlobalStyles';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  background-image: url("/treino.png");
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  h1 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: clamp(2rem, 5vw, 4rem);
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ServicesPreview = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  background: ${({ theme }) => theme.colors.surface};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`;

const ServiceCard = styled(Card)`
  text-align: center;
  height: 100%;

  .icon {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: block;
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;

    li {
      padding: ${({ theme }) => theme.spacing.xs} 0;
      color: ${({ theme }) => theme.colors.textSecondary};

      &::before {
        content: '✓';
        color: ${({ theme }) => theme.colors.success};
        font-weight: bold;
        margin-right: ${({ theme }) => theme.spacing.xs};
      }
    }
  }
`;


const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>{siteData.hero.title}</h1>
          <p>{siteData.hero.subtitle}</p>
          <Button 
            onClick={() => {
              const phoneNumber = siteData.contact.phone.replace(/\D/g, '');
              const message = 'Olá! Vi seu site e quero agendar minha avaliação gratuita!';
              const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
          >
            {siteData.hero.cta}
          </Button>
        </HeroContent>
      </HeroSection>

      <ServicesPreview>
        <div className="container">
          <SectionTitle>Meus Serviços</SectionTitle>
          <Grid columns={3}>
            {siteData.services.map((service) => (
              <ServiceCard key={service.id}>
                <span className="icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.features && (
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </ServiceCard>
            ))}
          </Grid>
        </div>
      </ServicesPreview>

    </>
  );
};

export default Home;