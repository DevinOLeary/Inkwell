import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';


const Template= (props) => {
  const post = props.data.contentfulBlogPost;
  return (
    <div className="container column">
      <Helmet title={`Your Blog Name - ${post.blogTitle}`} />
      <div className="container text-container column">
        <Link to={'/home/'}>back</Link>
        <h3>{post.blogTitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.blogContent.childMarkdownRemark.html }} />
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
