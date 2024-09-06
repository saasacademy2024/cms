import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: 'url("/images/background-top.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
      },
    },
    content: {
      position: 'relative',
      zIndex: 1,
      padding: theme.spacing(12, 0, 8), // Adjusted padding
      color: 'white',
    },
    title: {
      fontWeight: 700,
      marginBottom: theme.spacing(4),
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    subtitle: {
      marginBottom: theme.spacing(6),
      maxWidth: '600px',
      margin: '0 auto',
    },
    ctaButton: {
      padding: theme.spacing(1.5, 4),
      fontSize: '1.1rem',
      fontWeight: 600,
      backgroundColor: '#0d47a1',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1565c0',
      },
    },
  })
);

const HeroSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Container maxWidth="md" className={classes.content}>
        <Typography component="h1" variant="h2" align="center" className={classes.title}>
          SAAS Academy
        </Typography>
        <Typography variant="h5" align="center" className={classes.subtitle}>
          Master the skills you need for a successful career in tech. Join our community of learners and get access to top-notch courses, mentorship, and internship opportunities.
        </Typography>
    
      </Container>
    </Box>
  );
};

export default HeroSection;