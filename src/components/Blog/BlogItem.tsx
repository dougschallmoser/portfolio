import React from 'react';
import Moment from 'react-moment';
import Fade from 'react-reveal/Fade';
import './Blog.css';

interface Props {
  data: {
    link: string;
    title: string;
    pubDate: string;
  };
  key: string;
}

const BlogItem: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <Fade bottom>
    <a href={data.link} title={data.title} target="_blank" rel="noreferrer">
      <div className="blog-item">
        <div className="blog-content">
          <div className="blog-title">
            {data.title.toUpperCase()}
          </div>
          <div className="blog-date">
            <Moment format="MMMM Do, YYYY">
              {data.pubDate}
            </Moment>
          </div>
        </div>
      </div>
    </a>
    </Fade>
  )
}

export default BlogItem;