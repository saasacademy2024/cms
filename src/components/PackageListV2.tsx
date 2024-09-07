import React, { useState } from 'react';
import { Grid, Typography, Container, makeStyles, Fade, Tabs, Tab } from '@material-ui/core';
import PackageCard from './PackageCard';
import { packages, Package } from '../data/packagesv2';

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
  tabs: {
    marginBottom: theme.spacing(4),
  },
  tab: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  gridContainer: {
    marginTop: theme.spacing(4),
  },
  gridItem: {
    display: 'flex',
  },
}));

const categories = [
  { id: 'all', label: 'All Packages' },
  { id: 'genai', label: 'Gen AI' },
  { id: 'ui', label: 'UI Development' },
  { id: 'backend', label: 'Backend System Design' },
  { id: 'devops', label: 'DevOps' },
];

const categoryMapping: { [key: string]: string } = {
  'Gen AI': 'genai',
  'UI Development for Web and Mobile Apps': 'ui',
  'Backend System Design': 'backend',
  'Enpterprise web application development': 'backend',
  'DevOps': 'devops',
};

const PackageList: React.FC = () => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleCategoryChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredPackages = selectedCategory === 'all'
    ? packages
    : packages.filter((pkg: Package) => categoryMapping[pkg.category] === selectedCategory);

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
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.tabs}
        >
          {categories.map((category) => (
            <Tab
              key={category.id}
              label={category.label}
              value={category.id}
              className={classes.tab}
            />
          ))}
        </Tabs>
        <Grid container spacing={4} className={classes.gridContainer}>
          {filteredPackages.map((pkg: Package, index: number) => (
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