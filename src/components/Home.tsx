import React from 'react';
import { Element } from 'react-scroll';
import HeroSection from './HeroSection';
import PackageList from './PackageListV2';
import LearningPath from './LearningPath';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from './GlobalStyles';

const Home: React.FC = () => {
  return (
    <>
     <CssBaseline />
     <GlobalStyles />
      <HeroSection />
      <PackageList />
      <LearningPath />
      <Element name="about">
        <AboutUs />
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>
    </>
  );
};

export default Home;