import React, { useState } from 'react';
import styled from 'styled-components';
import { siteData } from '../config/siteData';
import { Button, Card } from '../styles/GlobalStyles';

const ContactHeader = styled.section`
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

const ContactContent = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ContactForm = styled(Card)`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  input, textarea, select {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 2px solid ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-family: inherit;
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const ContactInfo = styled(Card)`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .info {
    h4 {
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 0.25rem;
      font-size: ${({ theme }) => theme.fonts.sizes.md};
    }

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  font-size: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const SuccessMessage = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <>
      <ContactHeader>
        <div className="container">
          <h1>{siteData.contact.title}</h1>
          <p>{siteData.contact.description}</p>
        </div>
      </ContactHeader>

      <ContactContent>
        <div className="container">
          <ContactGrid>
            <ContactForm>
              <h3>Envie uma mensagem</h3>
              {showSuccess && (
                <SuccessMessage>
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </SuccessMessage>
              )}
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor="name">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="subject">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitação de Orçamento</option>
                    <option value="informacoes">Informações sobre Serviços</option>
                    <option value="agendamento">Agendamento de Consulta</option>
                    <option value="outros">Outros</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva como podemos ajudá-lo..."
                    required
                  />
                </FormGroup>

                <Button type="submit" variant="primary" style={{ width: '100%' }}>
                  Enviar Mensagem
                </Button>
              </form>
            </ContactForm>

            <ContactInfo>
              <h3>Informações de contato</h3>

              <ContactItem>
                <div className="icon">📞</div>
                <div className="info">
                  <h4>Telefone</h4>
                  <p>
                    <a href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`}>
                      {siteData.contact.phone}
                    </a>
                  </p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">✉️</div>
                <div className="info">
                  <h4>E-mail</h4>
                  <p>
                    <a href={`mailto:${siteData.contact.email}`}>
                      {siteData.contact.email}
                    </a>
                  </p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">📍</div>
                <div className="info">
                  <h4>Endereço</h4>
                  <p>{siteData.contact.address}</p>
                </div>
              </ContactItem>

              <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Redes Sociais</h4>
              <SocialLinks>
                {siteData.contact.social.instagram && (
                  <SocialLink
                    href={siteData.contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📷
                  </SocialLink>
                )}
                {siteData.contact.social.facebook && (
                  <SocialLink
                    href={siteData.contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📘
                  </SocialLink>
                )}
                {siteData.contact.social.whatsapp && (
                  <SocialLink
                    href={siteData.contact.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬
                  </SocialLink>
                )}
              </SocialLinks>
            </ContactInfo>
          </ContactGrid>
        </div>
      </ContactContent>
    </>
  );
};

export default Contact;