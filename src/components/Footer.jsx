import React from 'react';
import Facebook from '../public/social-media/Facebook.svg';
import Github from '../public/social-media/Github.svg';
import Instagram from '../public/social-media/Instagram.svg';
import Linkedin from '../public/social-media/Linkedin.svg';

const Footer = () => {
  return(
    <div className='footer'>
      <a target="_blank" href="https://www.facebook.com/illly"><img src={Facebook} className="sm-logo" alt="facebook" /></a>
      <a target="_blank" href="https://github.com/illlyo"><img src={Github} className="sm-logo" alt="github" /></a>
      <a target="_blank" href="https://instagram.com/illlyo/"><img src={Instagram} className="sm-logo" alt="instagram"  /></a>
      <a target="_blank" href="https://www.linkedin.com/in/illy-io/"><img src={Linkedin} className="sm-logo" alt="linkedin" /></a>
    </div>
  )
}

export default Footer;
