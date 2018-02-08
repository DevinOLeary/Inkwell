import React from 'react';
import {Link} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';

import FadeIn from './FadeIn';
const BlogOverflow = (props) => {
  const loadNumber = props.loadMorePosts;
  const posts = props.posts;
  const listStyle = {
    boxShadow: "1px 0px 5px",
    width: "400px",
    height: "auto",
    margin: "5vw",
    padding: "20px"
  }
  const content = [];
  for (let i = 1; i < loadNumber; i++){
    let post = posts[i].node;
    let postContent = post.blogContent.childMarkdownRemark;
    let externalPost = post.externalArticle;
    content.push(
      <FadeIn key={post.blogTitle}>
        <li className="container column center" style={listStyle}>
          <h3>{post.blogTitle}</h3>
          {externalPost ? <p dangerouslySetInnerHTML={{ __html: postContent.html }}/>
            : <div><p>{postContent.excerpt}</p><a>read</a></div>
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
