import React from 'react';
import { Container, Typography, Button, makeStyles, Theme, createStyles, Paper } from '@material-ui/core';
import { Email as EmailIcon, FileCopy as ContentCopyIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(8, 0),
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      marginBottom: theme.spacing(4),
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    subtitle: {
      marginBottom: theme.spacing(6),
      maxWidth: '600px',
      margin: '0 auto',
    },
    emailContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
    },
    emailPaper: {
      padding: theme.spacing(2, 4),
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
    },
    emailText: {
      fontWeight: 500,
      marginRight: theme.spacing(2),
    },
    copyButton: {
      minWidth: 'auto',
    },
    button: {
      padding: theme.spacing(1.5, 4),
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

const ContactUs: React.FC = () => {
  const classes = useStyles();
  const email = 'saasacademy2024@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert('Email address copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" component="h1" className={classes.title}>
          Contact Us
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Have questions or need assistance? We're here to help! Reach out to us via email, and we'll get back to you as soon as possible.
        </Typography>
        <div className={classes.emailContainer}>
          <Paper elevation={3} className={classes.emailPaper}>
            <Typography variant="body1" className={classes.emailText}>
              {email}
            </Typography>
            <Button
              size="small"
              className={classes.copyButton}
              onClick={handleCopyEmail}
              startIcon={<ContentCopyIcon />}
            >
              Copy
            </Button>
          </Paper>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          href={`mailto:${email}`}
          startIcon={<EmailIcon className={classes.icon} />}
        >
          Email Us
        </Button>
      </Container>
    </div>
  );
};

export default ContactUs;