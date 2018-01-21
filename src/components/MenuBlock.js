import React from 'react';
import Media from 'react-media';
import {TransitionGroup} from 'react-transition-group';

import MenuType from './MenuType';

class MenuBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: "drinks"
    }
  }

  handleClick(target){
    this.setState({activeTab: target});
  }
  render(){
    const activeTab = this.state.activeTab;
    const navBar = {
      boxShadow: "1px 0px 5px"
    }
    const buttonContainer = {
      position: "relative",
      width: "300px"
    }
    const menuContainer = {
      minHeight: "450px"
    }
    const menuContent = this.state.activeTab === "drinks" ? this.props.data.allWordpressWpDrinks.edges : this.props.data.allWordpressWpFood.edges;

    return(
      <section className="full-width">
        <div className="container row center" style={navBar} >
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
        <TransitionGroup style={menuContainer} className="container center">
          {
          this.state.activeTab === 'drinks' ?
            <MenuType type={'drinks'} menuContent={menuContent}/>
            :
            <MenuType type={'food'} menuContent={menuContent}/>
          }
        </TransitionGroup>
      </section>
    )
  }
}

export default MenuBlock;
