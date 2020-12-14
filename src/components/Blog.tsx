import React, { useState, useEffect, useRef, useLayoutEffect, FC } from 'react';
import BlogItem from './BlogItem';

const Blog: FC = () => {

  const [posts, setPosts] = useState<any[]>([])
  const hr = useRef<HTMLHRElement>(null);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dougschallmoser')
    .then(response => response.json())
    .then(posts => setPosts(posts.items))
  }, [])


  useLayoutEffect(() => {
    if (hr.current) {
      const hrTop = hr.current.getBoundingClientRect().top;
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
    <section id="blog">
      <div id="blog-header">RECENT BLOG POSTS</div>
      <hr ref={hr} />
      <div className="blog-grid">
        {posts.slice(0, 4).map(post => <BlogItem data={post} key={post.pubDate} />)}
      </div>
    </section>
  )
}

export default Blog;