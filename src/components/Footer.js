import React from 'react';
import Media from 'react-media';

import Logo from './Logo';
import ColoredDivider from './ColoredDivider';
import Facebook from '../assets/Facebook_Color.png';
import Instagram from '../assets/Instagram_Color.png';
import Mail from '../assets/mail.png';
import Location from '../assets/location-emblem.png';
import Phone from '../assets/phone-emblem.png';

import StoreHours from './StoreHours';

const socialLinks = {
  height: "5vw",
  width: "auto",
  margin: "5px",
  minHeight: "50px"
}
const footerLogo = {
  height: "10vw",
  width: "auto",
  minHeight: "80px"
}

const footerItemWidth ={
  width: '30%',
  margin: '10px',
  minWidth: '200px'
}

const footerContainer = {
  padding: "5vw",

}
const hoursHeader = {
  textDecoration: 'underline',
  margin: '0px'
}


const phoneAddress = (
  <div className="text-center" style={footerItemWidth}>
    <a href="tel:+8128222925" className="no-decoration">
      <img src={Phone} alt="Phone" style={socialLinks}/>
      <h4>(812) 822-2925</h4>
    </a>
    <br/>
    <a href="https://www.google.com/maps/place/105+N+College+Ave,+Bloomington,+IN+47404/data=!4m2!3m1!1s0x886c66de7482a3cd:0xc861f75e9711c78a?sa=X&ved=0ahUKEwishO65vM7YAhXl4IMKHSlzCxwQ8gEIKDAA" target="_blank" rel="noopener noreferrer" className="no-decoration">
      <img src={Location} alt="Location" style={socialLinks}/>
      <address><h4>105 N. College Ave.<br/>
      Bloomington, Indiana <br/> 47404</h4></address>
    </a>
  </div>
);

const storeHours = (
  <div className="text-center" style={footerItemWidth}>
    <h3 style={hoursHeader}>Hours</h3>
    <h4>Monday-Friday</h4>
    <h4>7:30AM-4:00PM</h4>
    <br/>
    <h4>Saturday & Sunday</h4>
    <h4>8:00AM-4:00PM</h4>
  </div>
);

const inkwellLogo = (data) => (
  <div className="text-center container column" style={footerItemWidth}>
    <Logo style={footerLogo}/>
    <ColoredDivider/>
    <h2>{data.site.siteMetadata.title}</h2>
    <ul className="container row">
      <a href="https://www.facebook.com/inkwellbtown/" target="_blank" rel="noopener noreferrer"><li><img src={Facebook} alt="Facebook" style={socialLinks}/></li></a>
      <a href="https://www.instagram.com/the_inkwell_bloomington/" target="_blank" rel="noopener noreferrer"><li><img src={Instagram} alt="Instagram" style={socialLinks}/></li></a>
      <a href="mailto:inkwellblooomington@gmail.com"><li><img src={Mail} alt="Mail" style={socialLinks}/></li></a>
    </ul>
  </div>
);



const Footer = (props) => {
  const logo = inkwellLogo(props.data);

  return (
    <Media query="(min-width: 600px)">
      {matches =>
        matches ? (
          <footer className='container spread row' style={footerContainer}>
            {phoneAddress}
              <br/>
            {logo}
              <br/>
            {storeHours}
          </footer>
        )
        : (
          <footer className='container spread column' style={footerContainer}>
            {logo}
              <br/>
            {storeHours}
              <br/>
            {phoneAddress}
          </footer>
        )
      }
    </Media>
  )
};

export default Footer;
