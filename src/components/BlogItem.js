import React from 'react';
import Moment from 'react-moment';

const BlogItem = ({ data }) => {

  return (
    <a href={data.link} target="_blank" rel="noreferrer">
      <div className="blog-item">
        <div className="blog-content">
          <div className="blog-title">
            {data.title.toUpperCase()}
          </div>
          <div className="blog-date">
            <Moment format="MMMM Do YYYY">
              {data.pubDate}
            </Moment>
          </div>
          <div className="blog-description">
            {data.description.substring(4, 150) + '...'}
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogItem;