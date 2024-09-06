import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'rgba(0, 0, 0, 0.7)', // Slightly darker semi-transparent background
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
  },
  toolbar: {
    padding: theme.spacing(1, 2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontWeight: 700,
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },
  navButton: {
    color: 'white',
    fontWeight: 500,
    marginLeft: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          SAAS Academy
        </Typography>
        <Button color="inherit" className={classes.navButton}>Home</Button>
        <Button color="inherit" className={classes.navButton}>About Us</Button>
        <Button color="inherit" className={classes.navButton}>Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;