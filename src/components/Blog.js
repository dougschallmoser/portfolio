import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';

const Blog = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dougschallmoser')
    .then(response => response.json())
    .then(posts => setPosts(posts.items))
  }, [])


  return (
    <section id="blog">
      <div id="about-skills">RECENT BLOG POSTS</div>
      <hr />
      <div className="blog-grid">
        {posts.slice(0, 4).map(post => <BlogItem data={post} key={post.pubDate} />)}
      </div>
    </section>
  )
}

export default Blog;