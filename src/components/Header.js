import React from 'react';
import Media from 'react-media';
import {Link} from 'react-scroll';

import Logo from '../components/Logo';

const logoDesktop = {
  height: "70px",
  width: "70px",
  margin: "20px"
}

const logoMobile = {
  height: "50px",
  width: "50px",
  margin: "10px"
}

const titleText = {
  position: 'absolute',
  top: '0px',
  textAlign: 'center',
  width: '100%',
  zIndex: '0',
  fontFamily: 'Yesteryear'
}
const NavItems = () =>(
  <ul className="container row nav-menu">
    <Link to="menuBlock" smooth={true}><li>menu</li></Link>
    <Link to="about" smooth={true} offset={-100}><li>about</li></Link>
    <Link to="contact" smooth={true} offset={200}><li>contact</li></Link>
  </ul>
)

const DesktopHeader = (props) => (
  <header className="nav-bar">
    <Media query="(min-width: 600px)">
      {matches =>
        matches ? (
          <div>
            <div className="container row spread">
              <Logo style={logoDesktop}/>
              <NavItems/>
            </div>
            <h3 style={titleText}>{props.data.site.siteMetadata.title}</h3>
          </div>
        )
        :
        (
          <div className="container row spread">
            <Logo style={logoMobile}/>
            <NavItems/>
          </div>
        )
      }
    </Media>
  </header>
)

export default DesktopHeader;
