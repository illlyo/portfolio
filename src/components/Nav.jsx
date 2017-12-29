import React from 'react';
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

Hey, my name is Ileana and I'm a Linguist turned Web-Developer.


      <p>Hi! stuff about me, list technologies</p>
      <h1>this is highlighted</h1>
    </div>
  )
}

const Nav = () => {
  return(
    <Router>
      <div>
      <div id="nav-container">
        <h1 id="logo-name"><span className='initial'>ileana</span>ordonez</h1>
        <Navcon />
      </div>
        <Route exact path='/' />
        <Route path='/portfolio' component={Projects} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}

export default Nav;
