import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, useTheme, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    transition: 'background 0.3s ease',
  },
  appBarScrolled: {
    background: 'rgba(0, 48, 73, 0.9)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3),
  },
  title: {
    flexGrow: 1,
    color: '#FFA500',
    textDecoration: 'none',
    fontWeight: 700,
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
    '&:hover': {
      color: '#FFD700',
    },
  },
  navButton: {
    color: '#FFFFFF',
    marginLeft: theme.spacing(2),
    fontWeight: 500,
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
    '&:hover': {
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
    },
  },
  menuButton: {
    color: '#FFFFFF',
  },
  drawer: {
    width: 250,
  },
  closeButton: {
    margin: theme.spacing(1, 1, 0, 'auto'),
    display: 'flex',
  },
  drawerPaper: {
    width: 250,
    backgroundColor: 'rgba(0, 48, 73, 0.95)',
  },
  drawerItem: {
    color: '#FFFFFF',
  },
}));

const navItems = [
  { label: 'About Us', to: 'about' },
  { label: 'Contact Us', to: 'contact' },
];

const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight - 84;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div className={classes.drawer}>
      <IconButton className={classes.closeButton} onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.label} 
            component={item.to === '/' ? RouterLink : ScrollLink}
            to={item.to}
            smooth={item.to !== '/'}
            duration={500}
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary={item.label} className={classes.drawerItem} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar 
      position="fixed" 
      className={`${classes.appBar} ${scrolled ? classes.appBarScrolled : ''}`}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          className={classes.title}
        >
          SAAS Academy
        </Typography>
        {isMobile ? (
          <>
            <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer 
              anchor="right" 
              open={drawerOpen} 
              onClose={toggleDrawer(false)}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <div>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={item.to === '/' ? RouterLink : ScrollLink}
                to={item.to}
                smooth={item.to !== '/'}
                duration={500}
                className={classes.navButton}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;