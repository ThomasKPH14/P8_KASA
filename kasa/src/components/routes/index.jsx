import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import-Pages
import Home from '../../pages/Home';
import Housing from '../../pages/Housing';
import Error404 from '../../pages/Error404';
import About from '../../pages/About';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';


const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Composant Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer /> {/* Composant Footer */}
    </Router>
  );
};

export default AppRouter;
