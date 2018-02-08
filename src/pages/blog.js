import React from 'react';
import Link from 'gatsby-link';

const BlogPage = (props) => (
  <div>
    <Link to="/home/"><p>back </p></Link>
    <h2 className="container-title">all the posts</h2>
    <ul>
      {props.data.allContentfulBlogPost.edges.map((node)=> {
        return <li key="node.node.blogTitle">{node.node.blogTitle}</li>
      })}
    </ul>
  </div>
);

export default BlogPage;

export const query = graphql `
  query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          blogTitle
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
  }
`
