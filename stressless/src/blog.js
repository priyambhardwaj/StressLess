import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="blog-card">
      <Link to={`/blogs/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        {!imageLoaded && <div className="blog-card-placeholder"></div>}
        <div className="blog-card-content">
          <h3>{blog.title}</h3>
          <p>{blog.excerpt}</p>
          <button>Read More</button>
        </div>
      </Link>
    </div>
  );
};

const BlogPage = ({ blogs }) => {
  return (
    <div className="blog-page">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
