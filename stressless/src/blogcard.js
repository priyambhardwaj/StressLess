import React from "react";
import { Link } from "react-router-dom";
import '../src/css/blog-card-page.css';



const BlogCard = ({id, image, title, excerpt, link, author }) => {
    return (
      <div className="blog-card">
        <img className="blog-card-image" src={image} alt={title} />
        <div className="blog-card-content">
          <h2 className="blog-card-title">{title}</h2>
          <p className="blog-card-excerpt">{excerpt}</p>
          <p className="blog-card-author">Author: {author}</p>
          <Link to={`/blog/${id}`} className="blog-card-button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
