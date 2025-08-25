import React from 'react';
import styled from 'styled-components';
import { siteData } from '../config/siteData';
import { Button, Card, Grid } from '../styles/GlobalStyles';


const ProductsGrid = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const ProductCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;

  .icon {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }

  .description {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    flex: 1;
  }

  .price {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }

  .features {
    list-style: none;
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    li {
      padding: ${({ theme }) => theme.spacing.xs} 0;
      color: ${({ theme }) => theme.colors.textSecondary};
      position: relative;
      padding-left: ${({ theme }) => theme.spacing.md};

      &::before {
        content: '✓';
        color: ${({ theme }) => theme.colors.success};
        font-weight: bold;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const Products: React.FC = () => {
  return (
      <ProductsGrid>
        <div className="container">
          <Grid columns={2}>
            {siteData.products.map((product) => (
              <ProductCard key={product.id}>
                <img src={product.image} alt={product.title} style={{ width: '100%', objectFit: 'cover', marginBottom: '1rem' }} />
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
                
                <Button 
                onClick={() => {
                  const url = product.url;
                  window.open(url, '_blank');
                }}
                  variant="primary"
                >
                  Comprar Agora
                </Button>
              </ProductCard>
            ))}
          </Grid>
        </div>
      </ProductsGrid>
  );
};

export default Products;