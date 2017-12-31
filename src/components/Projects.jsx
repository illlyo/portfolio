import React from 'react';
import Github from '../public/social-media/Github.svg';

const Projects = () => {

  return(
  <div className='projectDivs'>
    <div className='project-info'>
      <h3>World Refugee Data 2016</h3>
      <a target="_blank" href="https://github.com/illlyo/idp2016"><div className='project-one'></div></a>
        <p>After witnessing the Syrian Refugee Crisis in Austria in 2015, this project was able to quantifiably display not only the Syrian Refugees, but all the world refugees in 2016. I taught myself how to visualize data using D3js on a Single Page App with a React.js front-end framework. The data was gathered from <a href="#">UNHCR</a> global report, to which I created an API using Ruby Rails as by Back-end Development.
        </p>
    </div>
    <div className='project-info'>
      <h3>Lance App</h3>
      <a target="_blank" href="https://git.generalassemb.ly/illlyo/lance_app"><div className='project-two'></div></a>
        <p>Lance App is a Freelancer's personal assistant that provides scheduling, organization with booking, and archiving expenses for each job. This app has user login authentication with an MVC framework using Express.js. This project is currently an ongiong project open for more improvement.</p>
    </div>
    <div className='project-info'>
      <h3>DWMP: Brooklyn Edition</h3>
      <a target="_blank" href="https://git.generalassemb.ly/illlyo/DWMP_game"><div className='project-three'></div></a>
        <p>DWMP, aka "Dude, where's my phone?", is a point-click web-game where the user helps "Becky" find her phone in Brooklyn. This game was written using jQuery.</p>
    </div>
    <div className='project-info'>
      <h3>ileanaordonez.com</h3>
      <a target="_blank" href="https://github.com/illlyo/portfolio"><div className='project-four'></div></a>
        <p>This page is an ongoing project where I figured out how to discover more dependencies available for React.js. Specifically, understanding how to use Particle.js with interactivity as an animated feature.</p>
    </div>
  </div>
  )
}

export default Projects;
