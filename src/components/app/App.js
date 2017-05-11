import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header'
import YoutubeUrlInput from '../youtube-url-input/YoutubeUrlInput'
import { Button, Panel } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.linkChanged = this.linkChanged.bind(this);
    this.convert = this.convert.bind(this);
    this.state = {
      link: ''
    }
  }
  linkChanged(e) {
    this.setState({
      link: e.target.value
    })
  }
  convert() {
    alert(this.state.link);
  }
  render() {
    return (
      <div className="app">
        <Header text="YouTube2Git" className="app-header" />

        <div className="app-content container">
          <div className="app-row">
            <YoutubeUrlInput placeholder="Youtube Video Link" />

          </div>
          <div className="app-row text-center">
            <Button bsStyle="primary" className="btn-raised convert-btn" onClick={this.convert}>Convert To Markdown</Button>
          </div>
          <div className="app-row">
            <Panel header="Markdown">
              Panel content
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
