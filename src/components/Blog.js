import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import BlogItem from './BlogItem';

const Blog = () => {

  const [posts, setPosts] = useState([])
  const hr = useRef(null);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dougschallmoser')
    .then(response => response.json())
    .then(posts => setPosts(posts.items))
  }, [])


  useLayoutEffect(() => {
    const hrTop = hr.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (hrTop - 100 < window.scrollY + window.innerHeight) {
        hr.current.className = "line-scroll"
      } else {
        hr.current.className = "line"
      }
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    
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