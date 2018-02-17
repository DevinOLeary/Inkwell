import React from 'react';
import Media from 'react-media';
import MediaQuery from 'react-responsive';
import {TransitionGroup} from 'react-transition-group';

import drinkImage from '../assets/Inkwell-drink.jpg';
import MenuType from './MenuType';
import MenuImage from './MenuImage';
import FadeIn from './FadeIn';
import Texture from '../assets/seamless_paper_texture.jpg';

function menuArray(food){
  const arr = [];
  food.forEach((type) => {
    type.childItems.forEach((item) => {
      arr.push(item);
    });
  });
  return arr;
}

class MenuBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: "drinks",
      activeMenuItem: ""
    }
    this.handleFoodImage = this.handleFoodImage.bind(this);
  }

  clickHandler(value){
    this.setState({activeTab: value, activeMenuItem: ""});
  }
  handleFoodImage(e){
    e.preventDefault();
    const menuItem = e.target.innerText;
    this.setState({activeMenuItem: menuItem});
  }

  render(){
    const buttonContainer = {
      position: "relative",
      width: "300px"
    }
    const menuContainer = {
      minHeight: "450px",
      boxShadow: "1px 0px 5px",
      width: "60%",
      minWidth: "400px",
      justifyContent: "flex-start",
      background: `url(${Texture})`
    }
    const subheaderStyle = {
      marginTop: '-20px'
    }
    const drinkContent = this.props.data[1].node.menuTypeChildren;
    const foodContent = this.props.data[0].node.menuTypeChildren;
    const foodItemArray = menuArray(foodContent);
    const activeItem = foodItemArray.filter((item) => {
      return item.itemName === this.state.activeMenuItem;
    });
    const activeImage = this.state.activeMenuItem !== "" ? activeItem[0].itemImage.file.url : drinkImage;
    const activeTab = this.state.activeTab;

    return(
      <div className="container center row full-width">
        <MediaQuery minWidth={700}>
          <MenuImage activeImage={activeImage}/>
        </MediaQuery>
        <section className="container center column" style={menuContainer} >
          <div className="container column center">
            <hgroup className="container center section-header" style={buttonContainer}>
              <button className="button-flat" onClick={this.clickHandler.bind(this,'drinks')}><h3>drinks</h3></button>
              <button className="button-flat" onClick={this.clickHandler.bind(this,'food')}><h3>food</h3></button>
              <Media query="(min-width: 600px)">
                {matches =>
                  matches ? <hr className={`floating-underline ${activeTab === "food" ? "active-food" : ""}`}/> : <div/>
              }
              </Media>
            </hgroup>
            <Media query="(min-width: 600px)">
              {matches =>
                matches && activeTab === 'food' ? <p style={subheaderStyle}>click item to view</p> : <div/>
            }
            </Media>
          </div>
          <TransitionGroup className="container center">
            {
            this.state.activeTab === 'drinks' ?
              <MenuType type={'drinks'} menuContent={drinkContent}/>
              :
              <MenuType type={'food'} menuContent={foodContent} handleFoodImage={this.handleFoodImage}/>
            }
          </TransitionGroup>
        </section>
      </div>
    )
  }
}

export default MenuBlock;
