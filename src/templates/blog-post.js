import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import ColoredDivider from '../components/ColoredDivider';


const Template= (props) => {
  const post = props.data.contentfulBlogPost;
  return (
    <div className="container column">
      <Helmet title={`Inkwell Cafe - ${post.blogTitle}`} />
      <div className="container column full-width">
        <Link to={'/home/'}>back</Link>
        <hr className="line-colored"/>
        <h3>{post.blogTitle}</h3>
        {post.author && <h4>written by {post.author}</h4>}
        <hr className="line-colored"/>
        <div dangerouslySetInnerHTML={{ __html: post.blogContent.childMarkdownRemark.html }} className="text-container post-markdown container column"/>
      </div>
    </div>
  );
}

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      blogTitle
      author
      id
      featuredImage {
        file {
          url
        }
      }
      blogContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
