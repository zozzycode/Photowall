import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
    const post = props.post
    return <figure className="figure">
                <Link to={`/zozzy/react/single/${post.id}`}>
                  <img className= "photo" src={post.imageLink} alt={post.description} />
                </Link>
                <figcaption> <p> {post.description} </p> </figcaption>
                <div className="button-container">
                <button onClick={() => {
                    props.startRemovingPost(props.index, post.id);
                    props.history.push('/zozzy/react/');
                }}> Remove </button>
              <Link className='button' to={`/zozzy/react/single/${post.id}`}>
                <div className="comment-count">
                  <div className="speech-bubble"></div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0}
                </div>
              </Link>
                </div>
         </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo
