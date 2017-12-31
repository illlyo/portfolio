import React, { Component } from 'react';
import Nav from './components/Nav.jsx';

import Footer from './components/Footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Footer />
        </div>
    )
  }
}

export default App;
