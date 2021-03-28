import Moment from 'react-moment';
import Fade from 'react-reveal/Fade';
import { BlogItemProps } from './types';
import './Blog.css';


const BlogItem = ({ data }: BlogItemProps): JSX.Element => {
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

export { BlogItem };