import React from 'react'
import Navbar from '../components/public/Footer';
import Footer from '../components/public/Footer';

const Weblayout = ({ children }) => {
  return (
    <>
      {/* Render Navbar and Footer only within Weblayout */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Weblayout