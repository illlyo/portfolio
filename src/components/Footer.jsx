import React from 'react';
import Facebook from '../public/social-media/Facebook.svg';
import Github from '../public/social-media/Github.svg';
import Instagram from '../public/social-media/Instagram.svg';
import Linkedin from '../public/social-media/Linkedin.svg';

const Footer = () => {
  return(
    <div className='footer'>
      <img src={Facebook} className="sm-logo" alt="facebook" />
      <img src={Github} className="sm-logo" alt="github" />
      <img src={Instagram} className="sm-logo" alt="instagram" />
      <img src={Linkedin} className="sm-logo" alt="linkedin" />
    </div>
  )
}

export default Footer;
