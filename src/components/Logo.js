import React from 'react';
import {Link} from 'react-scroll';
<<<<<<< HEAD
import inkwellLogo from '../../public/inkwell-logo.png';
=======
import inkwellLogo from '../assets/inkwell-logo.png';
>>>>>>> 54ec394f68de657434d1785ca9dc86927158d59d



const Logo = (props) => (
  <Link to="top" smooth={true} className="logo-button"><img src={inkwellLogo} style={props.style} alt="Inkwell"/></Link>
);

export default Logo;
