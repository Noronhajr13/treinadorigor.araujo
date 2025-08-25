export interface SiteData {
  company: {
    name: string;
    tagline: string;
    description: string;
    logo?: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    backgroundImage?: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    features?: string[];
  }>;
  products: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
  }>;
  about: {
    title: string;
    description: string;
    image?: string;
    highlights: string[];
  };
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    content: string;
    image?: string;
    rating: number;
  }>;
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    social: {
      instagram?: string;
      facebook?: string;
      whatsapp?: string;
    };
  };
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}