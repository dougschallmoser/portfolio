import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ data }) => {


  return (
    <div className="blog-item">
      <div className="blog-content">
        <div className="blog-title">
          {data.title}
        </div>
        <div className="blog-description">
          {data.content.substring(4, 150) + '...'}
        </div>
        {data.pubDate}
      </div>
    </div>
  )
}

export default BlogItem;