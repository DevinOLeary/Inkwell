import React from 'react';
import {Element} from 'react-scroll';
import Waypoint from 'react-waypoint';

import TextContainer from '../components/TextContainer';
import ImageContainer from '../components/ImageContainer';
import Footer from '../components/Footer';
import Animations from '../components/Animations';
import MenuBlock from '../components/MenuBlock';
import MerchBlock from '../components/MerchBlock';
import BlogBlock from '../components/BlogBlock';


import CoffeeCup from '../assets/CoffeeCup';
import ColoredDivider from '../components/ColoredDivider';


class HomePage extends React.Component{
  render(){
    const edges = this.props.data.allMarkdownRemark.edges;
    console.log(edges);
    return(
      <div>
      {/* above the fold block*/}
        <Element name="top"/>
          <Waypoint onEnter={Animations.animateListIn.bind(this, "topList")}>
            <ul id="topList">
              <li><h2>eat well</h2></li>
              <li><h2>drink well</h2></li>
              <li><h2>live well</h2></li>
            </ul>
          </Waypoint>
          {/* blurb */}
        <TextContainer>
          <CoffeeCup/>
          <br/>
          <br/>
          <p>Made from scratch baked goods, high-quality coffee program, delicious and fresh breakfast and lunch.</p>
        </TextContainer>
        <ColoredDivider/>
        <Element name="menuBlock">
          <Waypoint onEnter={Animations.animateItemIn.bind(this, "menu")}>
            <h1 id="menu" className="container-title">menu</h1>
          </Waypoint>
        </Element>
          {/* menu container */}
        <section className="container">
          <MenuBlock/>
        </section>
        <br/>
        <br/>
        <ColoredDivider/>
        <TextContainer>
          <Element name="about"><h3>who we are and where we&apos;re going</h3></Element>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </TextContainer>
        <Element name="merchBlock">
          <Waypoint onEnter={Animations.animateItemIn.bind(this, "merch")}>
            <h1 id="merch" className="container-title">merch</h1>
          </Waypoint>
        </Element>
        <MerchBlock/>
        <ColoredDivider/>
        <Element name="blogBlock">
          <BlogBlock/>
        </Element>
        <ColoredDivider/>
        {/*contact section*/}
        <Element name="contact">
          <Waypoint onEnter={Animations.animateItemIn.bind(this, "contact")}>
            <h1 id="contact">get in touch!</h1>
          </Waypoint>
        </Element>
        <h3>Map</h3>
      </div>
    );
  }
}

export default HomePage


export const query = graphql `
  query HomeQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            
          }
        }
      }
    }
  }
`
