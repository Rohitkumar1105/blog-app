import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Components/HomePage'
import AboutMe from './Components/AboutMe';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-me" exact component={AboutMe} />
      </Switch>
    </Router>
  )
}

export default App
