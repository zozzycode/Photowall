import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "./url";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <Link to={routes.SINGLE + post.id}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        <p> {post.description} </p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            props.startRemovingPost(props.index, post.id);
            props.history.push(routes.HOME);
          }}
        >
          Remove
        </button>
        <Link className="button" to={routes.SINGLE + post.id}>
          <div className="comment-count">
            <div className="speech-bubble" />
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired
};

export default Photo;
