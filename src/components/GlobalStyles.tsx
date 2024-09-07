import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    '*': {
      scrollbarWidth: 'thin',
      scrollbarColor: '#6b6b6b #f1f1f1',
      
    },
    '*::-webkit-scrollbar': {
      width: '8px',
    },
    '*::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6b6b6b',
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: '#555',
      },
    },
    html: {
      scrollBehavior: 'smooth',
    },
  },
});

const GlobalStyles: React.FC = () => {
  useStyles();
  return null;
};

export default GlobalStyles;