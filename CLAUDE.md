# CLAUDE.md - Projeto Igor Araújo - Personal Trainer

## 📋 Visão Geral do Projeto

Este é um projeto React + TypeScript para **Igor Araújo**, Personal Trainer e Consultor especializado em treinos personalizados e orientação nutricional. O site foi desenvolvido para captação de leads, apresentação de serviços e venda de produtos digitais (e-books e programas de treinamento).

### 🎯 Informações do Cliente
- **Nome**: Igor Araújo
- **Profissão**: Personal Trainer / Consultor Físico
- **Especialidades**: Treinos personalizados, orientação nutricional, emagrecimento, ganho de massa muscular
- **Telefone**: (34) 99970-4771
- **Instagram**: [@igoraraujo.consultoria](https://www.instagram.com/igoraraujo.consultoria/)
- **Localização**: Uberlândia, MG (Atendimento Presencial e Online)

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológica
- **Frontend**: React 18 com TypeScript
- **Roteamento**: React Router DOM v7.8.2
- **Estilização**: Styled-components v6.1.19
- **Ícones**: Lucide React + FontAwesome
- **Build**: React Scripts 5.0.1
- **Hospedagem**: Hostinger (arquivos estáticos)

### Estrutura de Pastas
```
src/
├── components/layout/     # Componentes de layout (Header, Footer, Layout)
├── config/               # Configurações (siteData.ts, theme.ts)
├── contexts/             # Context API (ThemeContext)
├── pages/                # Páginas da aplicação
├── styles/               # Estilos globais (GlobalStyles.ts)
├── types/                # Definições TypeScript
└── App.tsx               # Componente raiz
```

## 📄 Páginas da Aplicação

1. **Home** (`/`) - Landing page principal com hero section e preview de serviços
2. **Loja** (`/store`) - Catálogo de produtos digitais (e-books e programas)
3. **Sobre** (`/about`) - Informações sobre Igor e credenciais
4. **Depoimentos** (`/testimonials`) - Feedback de clientes transformados
5. **Contato** (`/contact`) - Formulários e informações de contato

## 🎨 Sistema de Temas

### Tema Igor Araújo (`igorTheme`)
- **Cores Principais**: Preto (#1a1a1a, #000000) + Laranja (#ff6600)
- **Background**: Branco (#ffffff)
- **Surface**: Cinza claro (#f5f5f5)
- **Tipografia**: Inter (corpo) + Poppins (títulos)

### Outros Temas Disponíveis
- `defaultTheme` - Azul corporativo
- `dentalTheme` - Azul claro
- `fitnessTheme` - Vermelho esportivo

## 📦 Produtos e Serviços

### Serviços Oferecidos
1. **Treino Completo** - Treino personalizado com acompanhamento
2. **Dieta Personalizada** - Plano alimentar adaptado aos objetivos
3. **Acompanhamento Online** - App exclusivo com treinos e suporte WhatsApp

### Produtos Digitais
1. **SUPER TREINO 90D** - Programa de condicionamento físico de 90 dias
2. **XCELERATE** - Desafio trimestral intensivo
3. **TRANSFORMAÇÃO 24** - Programa de emagrecimento de 24 dias
4. **E-book "Comendo Saudável"** - Guia nutricional de 40 páginas

## 🎯 Features Implementadas

### Funcionalidades Core
- ✅ Navegação responsiva com menu mobile
- ✅ Sistema de temas dinâmico
- ✅ Integração WhatsApp para leads
- ✅ Cards de produtos com imagens
- ✅ Seção de depoimentos com avaliações
- ✅ Footer com redes sociais
- ✅ Design mobile-first
- ✅ Otimização para SEO básico

### Integrações
- ✅ WhatsApp Business (link direto com mensagem pré-formatada)
- ✅ Instagram (link para perfil)
- ✅ Imagens otimizadas na pasta `public/`

## 📊 Assets do Projeto

### Imagens Disponíveis
- `Igor.png` - Foto do profissional
- `treino.png` - Background hero section
- `supertreino.png` - Capa produto SUPER TREINO 90D
- `xcelerate.png` - Capa produto XCELERATE
- `transformacao.png` - Capa produto TRANSFORMAÇÃO 24
- `ebook.png` - Capa e-book "Comendo Saudável"
- `logo.png` - Logo da marca

## 🚀 Scripts Disponíveis

```bash
npm start          # Desenvolvimento (porta 3000)
npm run build      # Build de produção
npm test           # Executar testes
npm run eject      # Ejetar configuração (NÃO recomendado)
```

## 🔧 Configurações Importantes

### Arquivo `siteData.ts`
- Centraliza todos os dados do site (textos, produtos, serviços, contatos)
- Estrutura tipada com interface `SiteData`
- Fácil manutenção e atualização de conteúdo

### Arquivo `theme.ts`
- Define paletas de cores, tipografia e espaçamentos
- Tema personalizado `igorTheme` ativo por padrão
- Sistema escalável para múltiplos temas

### Componentes Reutilizáveis
- `Button` - Botões com variantes (primary, secondary, outline)
- `Card` - Cards com hover effects
- `Grid` - Sistema de grid responsivo
- `Flex` - Container flexbox configurável

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px
- **Sistema**: Mobile-first approach

### Otimizações Mobile
- Menu hamburger funcional
- Grid responsivo (produtos em coluna única)
- Tipografia escalável com `clamp()`
- Espaçamentos reduzidos

## 🐛 Issues Conhecidos

### Footer.tsx - Linha 112 e 121
- **Problema**: Ícones importados incorretamente
  - `<Camera color />` (linha 112) - componente não importado
  - `<FontAwesomeIcon icon={faWhatsapp} />` (linha 121) - FontAwesome não importado
- **Solução**: Substituir por ícones Lucide React ou FontAwesome corretamente importados

### Possíveis Melhorias
- [ ] Adicionar loading states
- [ ] Implementar lazy loading para imagens
- [ ] Adicionar animations/transitions
- [ ] Sistema de formulários com validação
- [ ] Integração com CMS (Contentful/Strapi)
- [ ] Analytics (Google Analytics/Hotjar)

## 🌐 Deploy e Hospedagem

### Processo de Deploy
1. `npm run build` - Gera pasta `build/`
2. Upload da pasta `build/` para Hostinger
3. Configuração de domínio personalizado
4. Configuração de redirecionamento para SPA

### Arquivos de Configuração
- `package.json` - Dependências e scripts
- `tsconfig.json` - Configuração TypeScript
- `public/manifest.json` - Configuração PWA básica
- `public/robots.txt` - SEO e indexação

## 👥 Personas e Objetivos

### Público-Alvo
1. **Iniciantes** - Pessoas que querem começar a treinar
2. **Intermediários** - Buscam otimização de resultados  
3. **Avançados** - Necessitam coaching especializado
4. **Reabilitação** - Pessoas com limitações físicas

### Call-to-Actions Estratégicos
- "Agende sua Avaliação Gratuita"
- "Transforme seu Corpo em 90 Dias"
- "Fale Comigo no WhatsApp"
- "Começar Agora"

## 🔍 SEO e Marketing

### Meta Tags (configurar em `public/index.html`)
- Title: "Igor Araújo - Personal Trainer | Transformação Corporal"
- Description: "Personal Trainer especializado em emagrecimento e ganho de massa muscular. Treinos personalizados e dieta sob medida."
- Keywords: "personal trainer, emagrecimento, musculação, dieta, uberlândia"

### Estrutura de URLs
- `/` - Home
- `/store` - Produtos digitais
- `/about` - Sobre Igor
- `/testimonials` - Depoimentos
- `/contact` - Contato

## 📞 Integrações de Contato

### WhatsApp Business
- Número: +55 34 99970-4771
- Link formatado: `https://wa.me/5534999704771`
- Mensagem pré-definida para leads da landing page

### Redes Sociais
- Instagram: [@igoraraujo.consultoria](https://www.instagram.com/igoraraujo.consultoria/)
- WhatsApp: Link direto para conversa

---

## 🔨 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start

# Build para produção
npm run build

# Servir build localmente (opcional)
npx serve -s build -l 3000
```

**Desenvolvido por**: CN CONECTA  
**Contato**: [https://www.cnconecta.com.br](https://www.cnconecta.com.br)