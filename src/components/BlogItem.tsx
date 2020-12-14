import React, { FC } from 'react';
import Moment from 'react-moment';

type Props = {
  data: {
    link: string;
    title: string;
    pubDate: string;
  };
  key: string;
}

const BlogItem: FC<Props> = ({ data }) => {

  return (
    <a href={data.link} target="_blank" rel="noreferrer">
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
  )
}

export default BlogItem;