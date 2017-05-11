import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header'
import { Button, FormControl } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header text="You2GIT" className="app-header" />

        <div className="container">
          <FormControl type="text" placeholder="Youtube Vide Link" />

          <Button >Click Me</Button>
        </div>
      </div>
    );
  }
}

export default App;
