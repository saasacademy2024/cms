import React, { useState, useEffect } from 'react';
import { Typography, Container, CircularProgress, makeStyles, Paper, Grid, Chip, Button } from '@material-ui/core';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { packages } from '../data/packagesv2';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(4),
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    borderRadius: theme.shape.borderRadius * 2,
  },
  backButton: {
    marginBottom: theme.spacing(2),
    '& .MuiButton-label': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(1),
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
  },
  backButtonText: {
    flex: 1,
    textAlign: 'left',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  description: {
    marginBottom: theme.spacing(4),
    fontSize: '1.1rem',
  },
  infoChip: {
    margin: theme.spacing(0, 1, 1, 0),
    padding: theme.spacing(1, 2),
  },
  content: {
    marginTop: theme.spacing(4),
    '& h1': {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
    '& h2': {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
    '& ul': {
      paddingLeft: theme.spacing(3),
    },
    '& li': {
      marginBottom: theme.spacing(1),
    },
  },
  ctaButton: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
  },
}));

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/')}
        className={classes.backButton}
      >
                <p className={classes.backButtonText}>Back to Home</p>
      </Button>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" className={classes.title}>
              {pkg.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
              {pkg.description}
            </Typography>
            {/* <div>
              <Chip icon={<BookOutlined />} label={`${pkg.lessons} lessons`} className={classes.infoChip} />
              <Chip icon={<TimerOutlined />} label={`${pkg.duration} weeks`} className={classes.infoChip} />
              <Chip icon={<StarOutline />} label={`${pkg.level}`} className={classes.infoChip} />
            </div> */}
            {content === null ? (
              <CircularProgress />
            ) : (
              <div className={classes.content}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
              {/* <Typography variant="h4" gutterBottom>
                ${pkg.price}
              </Typography> */}
              <Typography variant="body1" paragraph>
                Enroll now and start your journey towards mastering {pkg.title}.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                className={classes.ctaButton}
              >
                Enroll Now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PackageDetails;