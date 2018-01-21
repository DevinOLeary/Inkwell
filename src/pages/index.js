import React from 'react'
import Link from 'gatsby-link'

import Animations from '../components/Animations';
import Waypoint from 'react-waypoint';

const backgroundImage = {
  backgroundColor: 'black',
  height: '100vh'
}

const hidden = {
  opacity: 0
}

const IndexPage = ({data}) => (
  <Waypoint onEnter={Animations.animateListIn.bind(this, "landingContainer")}>
    <ul className="container column" style={backgroundImage} id="landingContainer">
      <li style={hidden}><h2 className="inverse">Welcome to {data.site.siteMetadata.title}</h2></li>
      <li style={hidden}><Link to="/home/"><button className="inverse-button"><h4>check it</h4></button></Link></li>
    </ul>
  </Waypoint>
)

export default IndexPage

export const query = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
