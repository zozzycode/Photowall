import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // builds URL

function PhotoWall(props) {
  return (
        <div>
          <Link className="addIcon" to="/zozzy/react/AddPhoto">Add</Link>
          <div className="photoGrid" >
            {props.posts
              .sort(function(x,y) {
                return  y.id - x.id
              })
              .map((post, index) => (
                <Photo key={post.id} post={post} {...props} index={index} />
            ))}
          </div>
        </div>
        )
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PhotoWall
