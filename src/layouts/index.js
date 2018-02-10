import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {throttle} from 'lodash';

import Header from '../components/Header';
import Footer from '../components/Footer';



import '../stylesheets/index.scss'

class TemplateWrapper extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      menuShow: false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', throttle(this.handleScroll, 200));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    const scrollTop = window.scrollY;
    const offSet = this.body.offsetTop;
    const distance = (offSet - scrollTop);
    if(distance < -450){
      this.setState({menuShow: true});
    } else {
      this.setState({menuShow: false});
    }
  }


  render(){
    const visible = this.state.menuShow;
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Located in Bloomington, IN, the Inkwell Cafe uses great food, drinks, personality, and aesthetics to create the prefect atmophere to unwind and treat yourself to something great.' },
            { name: 'keywords', content: 'cafe, coffee, breakfast, local, atmosphere, espresso, bakery' },
          ]}
        />
        {/* display header when not at root url */}
        {this.props.location.pathname !== "/" ?
          <Header data={this.props.data} location={this.props.location}/>
          :
          <div/>
        }
          <div className={`below-fold-nav ${visible ? 'show-nav' : ''}`}>
            <Header data={this.props.data} location={this.props.location}/>
          </div>

        <div ref={(body) => {this.body = body; }}>
          {this.props.children()}
        </div>

        {this.props.location.pathname !== "/" ?
          <Footer data={this.props.data} screenSize={this.state.screenSize}/>
          :
          <div/>
        }
      </div>
    );
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql `
  query titleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
