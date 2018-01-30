import React from 'react';
import {Link} from 'react-scroll';


import inkwellLogo from '../assets/inkwell-logo.png';



const Logo = (props) => (
  <Link to="top" smooth={true} className="logo-button"><img src={inkwellLogo} style={props.style} alt="Inkwell"/></Link>
);

export default Logo;
