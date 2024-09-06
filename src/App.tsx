// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import PackageList from './components/PackageList';
import PackageDetails from './components/PackageDetailsV2';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fafafa',
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <Container className={classes.root}>
        <Routes>
          <Route path="/" element={<PackageList />} />
          <Route path="/package/:id" element={<PackageDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;