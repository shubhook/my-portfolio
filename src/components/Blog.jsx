import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import './Blog.css';

const Blog = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load blog posts
    const loadPosts = async () => {
      try {
        const postsContext = import.meta.glob('../blogs/*.md', { as: 'raw' });
        const postsData = [];

        for (const path in postsContext) {
          const content = await postsContext[path]();
          const slug = path.split('/').pop().replace('.md', '');

          // Simple frontmatter parsing
          const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
          const match = content.match(frontmatterRegex);

          if (match) {
            const frontmatter = {};
            const lines = match[1].split('\n');
            lines.forEach(line => {
              const [key, ...valueParts] = line.split(':');
              if (key && valueParts.length) {
                frontmatter[key.trim()] = valueParts.join(':').trim();
              }
            });

            const bodyContent = content.replace(frontmatterRegex, '').trim();
            const excerpt = bodyContent.split('\n\n')[0].substring(0, 200) + '...';
            const readingTime = Math.ceil(bodyContent.split(' ').length / 200);

            postsData.push({
              slug,
              title: frontmatter.title || 'Untitled',
              date: frontmatter.date || '',
              excerpt,
              readingTime
            });
          }
        }

        // Sort by date (newest first)
        postsData.sort((a, b) => {
          const dateA = new Date(a.date.split('/').reverse().join('-'));
          const dateB = new Date(b.date.split('/').reverse().join('-'));
          return dateB - dateA;
        });

        setPosts(postsData);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className={`blog ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <section className="section">
          <span className="section-badge">Blog</span>
          <h1 className="main-heading">Thoughts & Writing</h1>
          <p className="subtitle">Random thoughts on development, tech, and life.</p>
        </section>

        <div className="section-divider" />

        {posts.length === 0 ? (
          <div className="empty-state">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card">
                <div className="post-header">
                  <h2 className="post-title">{post.title}</h2>
                  <ArrowRight size={20} className="post-arrow" />
                </div>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-divider">•</span>
                  <span className="post-reading-time">
                    <Clock size={14} />
                    {post.readingTime} min read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Blog;
