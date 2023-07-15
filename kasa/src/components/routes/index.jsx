import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des pages
import Home from '../../pages/Home';
import Housing from '../../pages/Housing';
import Error404 from '../../pages/Error404';
import About from '../../pages/About';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/housing" component={Housing} />
        <Route component={Error404} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
