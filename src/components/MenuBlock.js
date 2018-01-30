import React from 'react';
import Media from 'react-media';
import {TransitionGroup} from 'react-transition-group';

import MenuType from './MenuType';

import DrinkImage from '../assets/Inkwell-drink.jpg';

class MenuBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: "drinks"
    }
  }

  render(){
    const buttonContainer = {
      position: "relative",
      width: "300px"
    }
    const menuContainer = {
      minHeight: "650px",
      boxShadow: "1px 0px 5px",
      width: "60%",
      minWidth: "400px",
      justifyContent: "flex-start"
    }

    const menuImage = {
      backgroundImage: `url(${DrinkImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%',
      width: '40%'


    return(
      <div className="container center row full-width">
        <section style={menuImage}/>
        <section className="container center column" style={menuContainer} >
          <div className="container row center">
            <hgroup className="container center section-header" style={buttonContainer}>
              <button className="button-flat" onClick={this.handleClick.bind(this, 'drinks')}><h3>drinks</h3></button>
              <button className="button-flat" onClick={this.handleClick.bind(this, 'food')}><h3>food</h3></button>
              <Media query="(min-width: 600px)">
                {matches =>
                  matches ? <hr className={`floating-underline ${activeTab === "food" ? "active-food" : ""}`}/> : <div/>
              }
              </Media>
            </hgroup>
          </div>
        </section>
      </div>
    )
  }
}

export default MenuBlock;
