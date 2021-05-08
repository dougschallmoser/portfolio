import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { IPost } from './types';
import { BlogItem } from './BlogItem';
import { SCBlog } from './styles';
import './Blog.css';

const Blog = (): JSX.Element => {

  const [posts, setPosts] = useState<IPost[]>([])
  const hr = useRef<HTMLHRElement>(null);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dougschallmoser')
    .then(response => response.json())
    .then(posts => setPosts(posts.items))
  }, [])


  useLayoutEffect(() => {
    if (hr.current) {
      const hrTop: number = hr.current.getBoundingClientRect().top;
      const onScroll = () => {
        if (hr.current && hrTop - 100 < window.scrollY + window.innerHeight) {
          hr.current.className = "line-scroll"
        } else if (hr.current) {
          hr.current.className = "line"
        }
      }
      
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
    
  }, [])


  return (
    <Fade>
      <SCBlog id="blog">
        <div id="blog-header">RECENT BLOG POSTS</div>
        <hr ref={hr} />
        <div className="blog-grid">
          {posts.slice(0, 8).map(post => <BlogItem data={post} key={post.pubDate} />)}
        </div>
      </SCBlog>
    </Fade>
  )
}

export { Blog };