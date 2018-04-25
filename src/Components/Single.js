import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {

  render() {
    const { match, posts } = this.props;
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id);
    const comments = this.props.comments[match.params.id] || [];
    const index = this.props.posts.findIndex((post) => post.id === id);
    if (this.props.loading === true) {
      return <div className="loader">...loading</div>
    } else if (post) {
      return <div className='single-photo'>
               <Photo post={post} {...this.props} index={index}/>
               <Comments startAddingComment={this.props.startAddingComment} addComment={this.props.addComment} comments={comments} id={id}/>
             </div>
      } else {
        return <h2> ...no post found</h2>;
      }
    }
}

export default Single;
