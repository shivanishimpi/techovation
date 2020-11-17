import React from 'react';
import LandingPage from '../LandingPage';
import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
