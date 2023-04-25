import React from "react";
import BlogCard from "./blogcard";
import blogData from "./blogdata";
import '../src/css/blog-card-page.css';

const BlogPagenew = () => {
  return (
    <div className="bpage">
      <h1>Blog Page</h1>
      <div className="blog-page">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            excerpt={blog.excerpt}
            author={blog.author}
            link={`/blog/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPagenew;