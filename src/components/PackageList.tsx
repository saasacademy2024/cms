import React from 'react';
import { Grid, Typography, Container, makeStyles, Fade } from '@material-ui/core';
import PackageCard from './PackageCard';
import { packages } from '../data/packages';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
    marginBottom: theme.spacing(6),
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: theme.spacing(8),
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  gridContainer: {
    marginTop: theme.spacing(4),
  },
  gridItem: {
    display: 'flex',
  },
}));

const PackageList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Fade in={true} timeout={1000}>
          <Typography variant="h3" component="h2" className={classes.title}>
            Learning & Career Growth Hub
          </Typography>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Typography variant="h6" component="p" className={classes.subtitle}>
            Explore our comprehensive range of learning packages, mentorship programs, and internship opportunities designed to accelerate your tech career.
          </Typography>
        </Fade>
        <Grid container spacing={4} className={classes.gridContainer}>
          {packages.map((pkg, index) => (
            <Fade in={true} timeout={1000 + (index * 500)} key={pkg.id}>
              <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                <PackageCard package={pkg} />
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PackageList;