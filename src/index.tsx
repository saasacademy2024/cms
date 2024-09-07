// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './styles/theme'; 
const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);