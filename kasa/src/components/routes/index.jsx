import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import des pages
import Home from '../../pages/Home';
import Housing from '../../pages/Housing';
import Error404 from '../../pages/Error404';
import About from '../../pages/About';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/housing" component={Housing} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
