import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GitHubConverter from '../converters/GitHubConverter';
import GitLabConverter from '../converters/GitLabConverter';
import MarkdownConverter from '../converters/MarkdownConverter';

const App = (props) => {
    return (
        <Router>
          <div>
            <Route exact path="/" component={GitHubConverter} />
            <Route path="/github" component={GitHubConverter} />
            <Route path="/gitlab" component={GitLabConverter} />
            <Route path="/md" component={MarkdownConverter} />
          </div>
        </Router>
    );
};

export default App;
