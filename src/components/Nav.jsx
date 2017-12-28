import React from 'react';
import Particles from 'react-particles-js';

const Nav = () => {
  return(
    <div id="me">
      <h1>Ileana Ordonez</h1>
        <Particles
                params={{
              		particles: {
              			line_linked: {
              				shadow: {
              					enable: true,
              					color: "#3CA9D1",
              					blur: 1
              				}
              			}
              		}
              	}}
              />
    </div>
  )
}

export default Nav;
