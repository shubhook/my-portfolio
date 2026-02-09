import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Navbar from './Navbar';
import './BlogPost.css';

const BlogPost = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postsContext = import.meta.glob('../blogs/*.md', { as: 'raw' });

        for (const path in postsContext) {
          const postSlug = path.split('/').pop().replace('.md', '');

          if (postSlug === slug) {
            const content = await postsContext[path]();

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
              const readingTime = Math.ceil(bodyContent.split(' ').length / 200);

              setPost({
                title: frontmatter.title || 'Untitled',
                date: frontmatter.date || '',
                content: bodyContent,
                readingTime
              });
            }
            break;
          }
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className={`blog-post ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <p className="loading">Loading...</p>
        </div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className={`blog-post ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    );
  }

  return (
    <div className={`blog-post ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article className="post-content">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="meta-item">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="meta-divider">•</span>
              <span className="meta-item">
                <Clock size={14} />
                {post.readingTime} min read
              </span>
            </div>
          </header>

          <div className="post-divider" />

          <div className="markdown-content">
            {/* Simple markdown rendering - replace with proper markdown parser */}
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx}>{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </article>
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default BlogPost;
