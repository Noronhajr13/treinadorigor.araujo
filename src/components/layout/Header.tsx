import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../../config/siteData';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: 700;
  text-decoration: none;

  p {
    margin-top: 12px;
    color: white;
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md};
    transform: translateY(${({ isOpen }) => isOpen ? '0' : '-100%'});
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive, theme }) => isActive ? theme.colors.accent : theme.colors.background};
  font-weight: ${({ isActive }) => isActive ? '600' : '400'};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/store', label: 'Loja' },
    { path: '/about', label: 'Sobre' },
    { path: '/testimonials', label: 'Depoimentos' },
    { path: '/contact', label: 'Contato' },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src={siteData.company.logo} alt={`${siteData.company.name} Logo`} style={{ maxWidth: '60px', maxHeight: '40px' }} />
          <p>{siteData.company.name}</p>
        </Logo>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;