import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Nav from './components/Nav.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Particles
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 2
            				}
            			}
            		}
            	}}
            />
          <Nav />
        </div>
    )
  }
}

export default App;
