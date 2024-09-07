import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, makeStyles, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Package } from '../data/packages';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  media: {
    height: 200, // Fixed height for all card media
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
     flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  description: {
    marginBottom: theme.spacing(2),
    flexGrow: 1, 
  },
  button: {
    fontWeight: 700,
  },
  actions: {
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  },
}));

interface PackageCardProps {
  package: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={ pkg.image ? `/images/${pkg.image}` : `/images/${pkg.id}.webp`}
        title={pkg.title}
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2" className={classes.title}>
          {pkg.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.description}>
          {pkg.description}
        </Typography>
    
        <CardActions className={classes.actions}>
            <Button
                component={Link}
                to={`/package/${pkg.id}`}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Learn More
            </Button>
      </CardActions>
      </CardContent>
    </Card>
  );
};

export default PackageCard;