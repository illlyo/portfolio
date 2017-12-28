import React, { Component } from 'react';

import Nav from './components/Nav.jsx';
import Projects from './components/Projects.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Projects />
        </div>
    )
  }
}

export default App;
