import React, { useState, useEffect } from 'react';
import { Typography, Container, CircularProgress, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { packages } from '../data/packages';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  content: {
    '& h1': {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: theme.spacing(2),
    },
    '& h2': {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    '& ul': {
      paddingLeft: theme.spacing(3),
    },
    '& li': {
      marginBottom: theme.spacing(1),
    },
  },
}));

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = packages.find(p => p.id === id);
  const [content, setContent] = useState<string | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const loadContent = async () => {
      if (pkg) {
        try {
          const response = await fetch(`/mock/content/${pkg.contentFile}`);
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error('Failed to load content:', error);
          setContent('Failed to load content. Please try again later.');
        }
      }
    };

    loadContent();
  }, [pkg]);

  if (!pkg) {
    return <Typography>Package not found</Typography>;
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.title}>
        {pkg.title}
      </Typography>
      <Typography variant="subtitle1" className={classes.description}>
        {pkg.description}
      </Typography>
      {content === null ? (
        <CircularProgress />
      ) : (
        <div className={classes.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </Container>
  );
};

export default PackageDetails;