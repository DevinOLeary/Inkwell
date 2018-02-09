import React from 'react';
import {Transition} from 'react-transition-group';
import Animations from './Animations';

const MenuImage = (props)=> {
  const menuImage = {
    backgroundImage: `url(${props.activeImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    width: '40%'
  }
  return(
    <section style={menuImage}/>
  );
}

export default MenuImage;
