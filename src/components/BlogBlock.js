import React from 'react';

import BlogOverflow from './BlogOverflow';
class BlogBlock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loadMorePosts: 1
    }
  }

  hidePosts = () => (
    this.setState({loadMorePosts: 1})
  )
  loadMore = () => {
    const currentPosts = this.state.loadMorePosts;
    const addition = this.props.post.length - currentPosts > 1 ? 2 : 1;
    console.log(addition)
    return this.setState({loadMorePosts: currentPosts + addition});
  }
  render(){
    const featuredPost = this.props.post[this.props.post.length - 1].node;
    const featuredPostContent = featuredPost.blogContent.childMarkdownRemark;
    const externalPost = featuredPost.externalArticle;
    const imageStyle = {
      width: '40vw',
      minWidth: '300px'
    }
    const buttonStyle = {
      marginTop: '20px'
    }
    return(
      <div className="text-container container column">
        {/*featured Post*/}
        <article className="container row">
          <hgroup className="container column">
            <h3>{featuredPost.blogTitle}</h3>
            {externalPost ? <p dangerouslySetInnerHTML={{ __html: featuredPostContent.html }}/>
              : <p>{featuredPostContent.excerpt}</p>
          }
          </hgroup>
          <aside><img src={featuredPost.featuredImage.file.url} alt={featuredPost.blogTitle} style={imageStyle}/></aside>
        </article>
        <BlogOverflow posts={this.props.post} loadMorePosts={this.state.loadMorePosts} hidePosts={this.hidePosts}/>
        {this.state.loadMorePosts < this.props.post.length &&
          <button className="button-action" style={buttonStyle} onClick={this.loadMore}>load more posts</button>
        }
      </div>
    );
  }
}

export default BlogBlock;
