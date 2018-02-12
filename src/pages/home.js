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
import Map from '../components/Map';
import AboutBlock from '../components/AboutBlock';

import CoffeeCup from '../assets/CoffeeCup';
import ColoredDivider from '../components/ColoredDivider';

class HomePage extends React.Component{
  render(){
    const menuContentNodes = this.props.data.allContentfulMenuCategory.edges;
    const merchContentNodes = this.props.data.allContentfulMerchItem.edges;
    const headerImage = this.props.data.allContentfulHeaderImage.edges.map((node) => node.node.image.file.url);
    const aboutSection = this.props.data.allContentfulAboutSection.edges[0].node.sectionContent.childMarkdownRemark.html;
    const blogPostNodes = this.props.data.allContentfulBlogPost.edges;
    return(
      <div>
      {/* above the fold block*/}
        <Element name="top"/>
        <ImageContainer image={headerImage[0]}>
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
          <p>Made from scratch baked goods, superior coffee program, breakfast and lunch options made with only the highest quality ingredients.</p>
        </TextContainer>
        <ColoredDivider/>
        <Element name="menuBlock">
          <Waypoint onEnter={Animations.animateItemIn.bind(this, "menu")}>
            <h1 id="menu" className="container-title">menu</h1>
          </Waypoint>
        </Element>
          {/* menu container */}
        <section className="container">
          <MenuBlock data={menuContentNodes}/>
        </section>
        <br/>
        <br/>
        <ColoredDivider/>
        <TextContainer>
          <Element name="about">
            <AboutBlock about={aboutSection}/>
          </Element>
        </TextContainer>
        <ColoredDivider/>
        <Element name="merchBlock">
          <Waypoint onEnter={Animations.animateItemIn.bind(this, "merch")}>
            <h1 id="merch" className="container-title">merch</h1>
          </Waypoint>
        </Element>
        <MerchBlock items={merchContentNodes}/>
        <ColoredDivider/>
        <Element name="blogBlock">
          <BlogBlock post={blogPostNodes}/>
        </Element>
        <ColoredDivider/>
        {/*contact section*/}
        <Element name="contact">
          <Waypoint onEnter={Animations.animateItemIn.bind(this, "contact")}>
            <h1 id="contact" className="container-title">get in touch!</h1>
          </Waypoint>
        </Element>
        <Map/>
      </div>
    );
  }
}

export default HomePage


export const query = graphql `
  query HomeQuery {
    allContentfulBlogPost {
      edges {
        node {
          blogTitle
          id
          externalArticle
          featuredImage {
            file {
              url
            }
          }
          blogContent {
            childMarkdownRemark {
              excerpt(pruneLength: 250)
              html
            }
          }
        }
      }
    }
    allContentfulMenuCategory {
      edges {
        node {
          categoryTitle
          menuTypeChildren {
            typeName
            groupCost
            childItems {
              itemName
              itemCost
              itemImage {
               file {
                url
              }
              }
            }
          }
        }
      }
    }
    allContentfulMerchItem {
      edges {
        node {
          merchName
          merchCost
          merchDescription{
            childMarkdownRemark{
              html
            }
          }
          merchImage {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulHeaderImage {
      edges {
        node {
          image {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulAboutSection {
      edges {
        node {
          sectionContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
