import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { Button, Card, Grid } from '../styles/GlobalStyles';

const TestimonialsHeader = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.surface}, white);
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TestimonialsGrid = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const TestimonialCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: -1rem;
    left: 1rem;
    font-family: serif;
    line-height: 1;
  }

  .content {
    font-style: italic;
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding-top: ${({ theme }) => theme.spacing.md};
    flex: 1;
  }

  .author {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.surface};
    padding-top: ${({ theme }) => theme.spacing.md};
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    font-weight: bold;
  }

  .author-info {
    flex: 1;

    .name {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 0.25rem;
    }

    .role {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: ${({ theme }) => theme.fonts.sizes.sm};
    }
  }

  .rating {
    display: flex;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }
`;

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.text};
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

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#fbbf24' : '#d1d5db' }}>
        ⭐
      </span>
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <>
      <TestimonialsHeader>
        <div className="container">
          <h1>Depoimentos</h1>
          <p>Veja o que nossos clientes têm a dizer sobre nossos serviços e resultados.</p>
        </div>
      </TestimonialsHeader>

      <TestimonialsGrid>
        <div className="container">
          <Grid columns={2}>
            {siteData.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <div className="content">
                  {testimonial.content}
                </div>
                <div className="author">
                  <div className="avatar">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      getInitials(testimonial.name)
                    )}
                  </div>
                  <div className="author-info">
                    <div className="name">{testimonial.name}</div>
                    <div className="role">{testimonial.role}</div>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </TestimonialCard>
            ))}
          </Grid>
        </div>
      </TestimonialsGrid>

      <CTASection>
        <div className="container">
          <h2>Seja o próximo a ter uma experiência incrível!</h2>
          <p>Entre em contato conosco e descubra como podemos superar suas expectativas.</p>
          <Button as={Link} to="/contact" variant="primary">
            Entrar em Contato
          </Button>
        </div>
      </CTASection>
    </>
  );
};

export default Testimonials;