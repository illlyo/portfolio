import React from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Projects from './Projects.jsx';

function Navcon(){
  return(
    <nav>
      <ul className="hamburger">
        <Link to ='/'>
          <li>Home</li>
        </Link>
        <Link to ='/portfolio'>
          <li>Portfolio</li>
        </Link>
        <Link to ='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

function About(){
  return(
    <div className='about-me'>

<p>Hey! my name is <span className='illy'>ileana</span> and I'm a Linguist turned Web-Developer<span className='illy'>.</span> I am a creative problem solver who loves to code, develop seamless UX, and drinks unlimited amounts of yerba mate<span className='illy'>.</span> </p>

      <h3>Programming Languages<span className='illy'>:</span></h3>
      <ul>
        <li>HTML5/CSS3</li>
        <li>Javascript</li>
        <li>Ruby on Rails</li>
        <li>Git</li>
        <li>SQL</li>
        <li>jQuery</li>
        <li>React.js</li>
        <li>D3.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Particle.js</li>
      </ul>

      <h3>Favorite Text Editor<span className='illy'>:</span></h3>
      <p>Atom</p>
      <h3>Setup <span className='illy'>:</span></h3>
      <p>MacBook Pro (Retina, 15inch) with a 2.2GHz Core i7 Processor & 16GB of RAM.</p>
    </div>
  )
}

const Nav = () => {
  return(
    <Router>
      <div>
      <div id="nav-container">
        <div className='log'>
        <h1 id="logo-name" ><span className='initial'>ileana</span>ordonez<span className='initial'>.</span></h1>
        <p id="descript">Designer, <span className='illy'>Developer</span> & Data Viz<span className='illy'>.</span></p>
        </div>
        <Navcon />
      </div>
        <Particles
                params={{
                  particles: {
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "salmon",
                        blur: 5
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                    "repulse": {
                      "distance": 100,
                      "duration": 0.4
                    }
              }},
              "retina_detect": true}}
        />
        <Route exact path='/' />
        <Route path='/portfolio' component={Projects} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}

export default Nav;
