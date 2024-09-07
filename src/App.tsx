import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PackageDetails from './components/PackageDetailsV2';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<PackageDetails />} />
      </Routes>
    </Router>
  );
};

export default App;