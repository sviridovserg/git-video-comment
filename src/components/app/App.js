import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GitHubConverter from '../converters/GitHubConverter';

const App = (props) => {
    return (
        <Router>
          <div>
            <Route exact path="/" component={GitHubConverter} />
            <Route path="/github" component={GitHubConverter} />
          </div>
        </Router>
    );
};

export default App;
