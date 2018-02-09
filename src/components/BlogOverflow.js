import React from 'react';
import {Link} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';
import {Link as GatsbyLink} from 'gatsby-link';

import FadeIn from './FadeIn';
const BlogOverflow = (props) => {
  const loadNumber = props.loadMorePosts;
  const posts = props.posts;
  const listStyle = {
    boxShadow: "1px 0px 5px",
    width: "400px",
    height: "auto",
    margin: "5vw"
  }

  const content = [];
  for (let i = 1; i < loadNumber; i++){
    let post = posts[i].node;
    let postContent = post.blogContent.childMarkdownRemark;
    let externalPost = post.externalArticle;
    let featuredImage = post.featuredImage && post.featuredImage.file.url;
    content.push(
      <FadeIn key={post.blogTitle}>
        <li className="container column center container-article-preview" style={listStyle}>
          {featuredImage && <img src={featuredImage} alt={post.blogTitle} className="image-featured"/>}
          <br/>
          <br/>
          <h3 className="removed-margin">{post.blogTitle}</h3>
          {externalPost ? <p dangerouslySetInnerHTML={{ __html: postContent.html }}/>
            : <div>
                <p>{postContent.excerpt}</p>
                <GatsbyLink to={`/posts/${post.blogTitle}`}><a>read</a></GatsbyLink>
              </div>
          }
        </li>
      </FadeIn>
    );
  }
  return (
    <section className="container column">
      <ul >
      <TransitionGroup className="container row center">
        {content}
      </TransitionGroup>
      </ul>
      {loadNumber > 1 && <Link to="blogBlock" smooth={true} offset={-210}><button className="button-action" onClick={props.hidePosts}>clear</button></Link>}
    </section>
  );
}

export default BlogOverflow;
