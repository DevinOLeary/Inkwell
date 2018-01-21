import React from 'react';
import {Element} from 'react-scroll';
import Waypoint from 'react-waypoint';

import TextContainer from '../components/TextContainer';
import ImageContainer from '../components/ImageContainer';
import Footer from '../components/Footer';
import Animations from '../components/Animations';
import MenuBlock from '../components/MenuBlock';

import CounterImage from '../assets/Inkwell-counter.jpg';
import DoorImage from '../assets/Inkwell-door.jpg';
import DrinkImage from '../assets/Inkwell-drink.jpg';
import WindowImage from '../assets/Inkwell-window.jpg';
import CoffeeCup from '../assets/CoffeeCup';


class HomePage extends React.Component{
  render(){
    return(
      <div>
      {/* above the fold block*/}
        <Element name="top"/>
        <ImageContainer image={CounterImage}>
          <Waypoint onEnter={Animations.animateListIn.bind(this, "topList")}>
            <ul id="topList">
              <li><h2>eat well</h2></li>
              <li><h2>drink well</h2></li>
              <li><h2>live well</h2></li>
            </ul>
          </Waypoint>
        </ImageContainer>
          {/* blurb */}
        <TextContainer>
          <CoffeeCup/>
          <br/>
          <br/>
          <p>Made from scratch baked goods, high-quality coffee program, delicious and fresh breakfast and lunch.</p>
        </TextContainer>
        <ImageContainer image={DrinkImage}>
          <Element name="menuBlock">
            <Waypoint onEnter={Animations.animateItemIn.bind(this, "menu")}>
              <h1 id="menu">menu</h1>
            </Waypoint>
          </Element>
        </ImageContainer>
          {/* menu container */}
        <section className="container">
          <MenuBlock data={this.props.data}/>
        </section>
        <ImageContainer image={WindowImage}/>
        <TextContainer>
          <Element name="about"><h3>who we are and where we&apos;re going</h3></Element>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </TextContainer>
        {/*contact section*/}
        <ImageContainer image={DoorImage}>
          <Element name="contact">
            <Waypoint onEnter={Animations.animateItemIn.bind(this, "contact")}>
              <h1 id="contact">get in touch!</h1>
            </Waypoint>
          </Element>
        </ImageContainer>
      </div>
    );
  }
}

export default HomePage

export const query = graphql`
  query menuContent {
    allWordpressWpDrinks {
      edges {
        node {
          title
            acf {
              menu_items
              menu_subheader
            }
        }
      }
    }
    allWordpressWpFood {
      edges {
        node {
          title
            acf {
              menu_items
            }
        }
      }
    }
  }
`
