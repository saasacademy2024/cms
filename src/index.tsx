// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import theme from './styles/theme'; 
import HeroSection from './components/HeroSection';
import GlobalStyles from './components/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <HeroSection />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);