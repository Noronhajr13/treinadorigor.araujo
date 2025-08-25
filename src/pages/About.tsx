import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { Button, Card, Grid, Flex } from '../styles/GlobalStyles';

const AboutContent = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const AboutText = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const ImagePlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;

const HighlightsSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const HighlightCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};

  .icon {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;

  h2 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: rgba(255, 255, 255, 0.9);
  }
`;

const About: React.FC = () => {
  const highlights = [
    { icon: '🎯', title: 'Experiência', description: 'Anos de experiência no mercado' },
    { icon: '👥', title: 'Clientes Satisfeitos', description: 'Centenas de clientes atendidos' },
    { icon: '🏆', title: 'Qualidade', description: 'Serviços de alta qualidade' },
    { icon: '🚀', title: 'Inovação', description: 'Sempre buscando inovar' },
  ];

  return (
    <>
      <AboutContent>
        <div className="container">
          <AboutGrid>
            <AboutText>
              <h2>Nossa História</h2>
              <p>{siteData.about.description}</p>
              <p>
                Nossa missão é proporcionar a melhor experiência possível para nossos clientes, 
                combinando expertise técnica com um atendimento personalizado e humanizado.
              </p>
              <Button as={Link} to="/contact">
                Fale Conosco
              </Button>
            </AboutText>
            <ImagePlaceholder>
              {siteData.about.image ? (
                <img src={siteData.about.image} alt="Sobre nós" />
              ) : (
                'Imagem da empresa'
              )}
            </ImagePlaceholder>
          </AboutGrid>
        </div>
      </AboutContent>

      <HighlightsSection>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Por que nos escolher?</h2>
          <Grid columns={4}>
            {highlights.map((highlight, index) => (
              <HighlightCard key={index}>
                <div className="icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </HighlightCard>
            ))}
          </Grid>
        </div>
      </HighlightsSection>

      <CTASection>
        <div className="container">
          <h2>Vamos trabalhar juntos?</h2>
          <p>Entre em contato e descubra como podemos ajudá-lo a alcançar seus objetivos.</p>
          <Flex justify="center" gap="1rem">
            <Button as={Link} to="/contact" style={{ background: 'white', color: '#2563eb' }}>
              Entrar em Contato
            </Button>
            <Button as={Link} to="/services" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
              Ver Serviços
            </Button>
          </Flex>
        </div>
      </CTASection>
    </>
  );
};

export default About;