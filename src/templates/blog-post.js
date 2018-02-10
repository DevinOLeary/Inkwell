import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';


const Template= (props) => {
  const post = props.data.contentfulBlogPost;
  return (
    <div className="container column">
      <Helmet title={`Inkwell Cafe - ${post.blogTitle}`} />
      <div className="container column full-width">
        <Link to={'/home/'}>back</Link>
        <h3>{post.blogTitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.blogContent.childMarkdownRemark.html }} className="text-container"/>
      </div>
    </div>
  );
}

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      blogTitle
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
