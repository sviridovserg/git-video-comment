import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GitHubConverter from '../converters/GitHubConverter';
import GitLabConverter from '../converters/GitLabConverter';
import MarkdownConverter from '../converters/MarkdownConverter';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import app from '../../reducers'

const store = createStore(app);

const App = (props) => {
    return (
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={GitHubConverter} />
              <Route path="/github" component={GitHubConverter} />
              <Route path="/gitlab" component={GitLabConverter} />
              <Route path="/md" component={MarkdownConverter} />
            </div>
          </Router>
        </Provider>
    );
};

export default App;
