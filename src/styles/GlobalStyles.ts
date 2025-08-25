import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 { font-size: ${({ theme }) => theme.fonts.sizes['4xl']}; }
  h2 { font-size: ${({ theme }) => theme.fonts.sizes['3xl']}; }
  h3 { font-size: ${({ theme }) => theme.fonts.sizes['2xl']}; }
  h4 { font-size: ${({ theme }) => theme.fonts.sizes.xl}; }
  h5 { font-size: ${({ theme }) => theme.fonts.sizes.lg}; }
  h6 { font-size: ${({ theme }) => theme.fonts.sizes.md}; }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 ${({ theme }) => theme.spacing.sm};
    }
    
    section {
      padding: ${({ theme }) => theme.spacing.xl} 0;
    }
    
    h1 { font-size: ${({ theme }) => theme.fonts.sizes['3xl']}; }
    h2 { font-size: ${({ theme }) => theme.fonts.sizes['2xl']}; }
    h3 { font-size: ${({ theme }) => theme.fonts.sizes.xl}; }
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: ${theme.colors.secondary};
          color: white;
          &:hover { background: ${theme.colors.primary}; }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover { 
            background: ${theme.colors.primary}; 
            color: white; 
          }
        `;
      default:
        return `
          background: ${theme.colors.primary};
          color: white;
          &:hover { background: ${theme.colors.secondary}; }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${({ gap, theme }) => gap || theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div<{ 
  direction?: 'row' | 'column'; 
  justify?: string; 
  align?: string; 
  gap?: string; 
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
  gap: ${({ gap, theme }) => gap || theme.spacing.sm};
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
`;