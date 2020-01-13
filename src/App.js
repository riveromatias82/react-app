import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Person from './components/Person';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/person/:username"
        component={Person}
      />
    </Switch>
  </Router>
)

export default App;