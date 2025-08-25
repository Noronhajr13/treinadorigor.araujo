import React from 'react';
import styled from 'styled-components';
import { siteData } from '../../config/siteData';
import { Instagram, MessageCircle } from 'lucide-react';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.text};
  color: white;
  padding: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.md};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterSection = styled.div`
  h4 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }

  p, a {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LogoFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: rgba(252, 243, 243, 0.6);
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  a {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    text-decoration: none;
    transition: color 0.3s ease;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <LogoFooter>
              <img src={siteData.company.logo} alt={`${siteData.company.name} Logo`} style={{ maxWidth: '40px', maxHeight: '20px' }} />
              <h4>{siteData.company.name}</h4>
            </LogoFooter>
            <p>{siteData.company.description}</p>
            <SocialLinks>
              {siteData.contact.social.instagram && (
                <SocialLink 
                  href={siteData.contact.social.instagram} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </SocialLink>
              )}
              {siteData.contact.social.whatsapp && (
                <SocialLink 
                  href={siteData.contact.social.whatsapp} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                </SocialLink>
              )}
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h4>Contato</h4>
            <ContactInfo>
              <p>📞 {siteData.contact.phone}</p>
              <p>✉️ {siteData.contact.email}</p>
              <p>📍 {siteData.contact.address}</p>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          <p>&copy; {currentYear} Desenvolvido por CN CONECTA. Quer saber mais? Entre em contato!</p>
          <p>Todos os direitos reservados.  <a href="https://www.cnconecta.com.br" target="_blank" rel="noopener noreferrer">https://www.cnconecta.com.br</a></p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;