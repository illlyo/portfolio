import React from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';

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
        <Link to ='/resume'>
          <li>Resume</li>
        </Link>
      </ul>
    </nav>
  )
}

function About(){
  return(
    <div className='about-me'>

<h3>Hey! my name is <span className='illy'>ileana</span> and I'm a Linguist turned Web-Developer<span className='illy'>.</span> I am a creative problem solver who loves to code, develop seamless UX, and drink unlimited amounts of yerba mate<span className='illy'>.</span> </h3>

      <h3>Programming Languages<span className='illy'>:</span></h3>
      <ul>
        <li>HTML5/CSS3<span className='illy'>.</span></li>
        <li>Javascript<span className='illy'>.</span></li>
        <li>Ruby on Rails<span className='illy'>.</span></li>
        <li>Git<span className='illy'>.</span></li>
        <li>SQL<span className='illy'>.</span></li>
        <li>jQuery<span className='illy'>.</span></li>
        <li>React.js<span className='illy'>.</span></li>
        <li>D3.js<span className='illy'>.</span></li>
        <li>Node.js<span className='illy'>.</span></li>
        <li>Express.js<span className='illy'>.</span></li>
        <li>Particle.js<span className='illy'>.</span></li>
      </ul>

      <h3>Favorite Text Editor<span className='illy'>:</span></h3>
      <p>Atom <span className='illy'>.</span></p>
      <h3>Setup <span className='illy'>:</span></h3>
      <p>MacBook Pro (Retina, 15inch) with a 2.2GHz Core i7 Processor & 16GB of RAM.</p>

    <h3>Contact<span className='illy'>:</span></h3>
    <p><a href="mailto:ileana.s.ordonez@gmail.com">ileana.s.ordonez@gmail.com</a></p>
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
        <Route path='/resume' component={Resume} />
      </div>
    </Router>
  )
}

export default Nav;
