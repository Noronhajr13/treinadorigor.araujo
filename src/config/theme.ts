import { ThemeConfig } from '../types';

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#f59e0b',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1f2937',
    textSecondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
};

export const dentalTheme: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#0ea5e9',
    secondary: '#0284c7',
    accent: '#06b6d4',
    surface: '#f0f9ff',
  },
};

export const fitnessTheme: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#dc2626',
    secondary: '#b91c1c',
    accent: '#f97316',
    surface: '#fef2f2',
  },
};

export const igorTheme: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#1a1a1a', // Preto principal
    secondary: '#000000', // Preto mais intenso
    accent: '#ff6600', // Laranja vibrante
    background: '#ffffff',
    surface: '#f5f5f5', // Cinza muito claro
    text: '#1a1a1a',
    textSecondary: '#666666',
    success: '#10b981',
    warning: '#ff6600', // Laranja também para avisos
    error: '#ef4444',
  },
};