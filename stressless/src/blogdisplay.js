/*This page is used to displaye blogs*/


import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogdata";
import "../src/css/blogdisplay.css";

const BlogView = () => {
  const { id } = useParams(); // get the blog id from the URL
  const blog = blogData.find((blog) => blog.id === parseInt(id)); // find the blog with the matching id

  return (
    <div className="blog-view">
      <img className="blog-view-image" src={blog.image} alt={blog.title} />
      <div className="blog-view-content">
        <h1 className="blog-view-title">{blog.title}</h1>
        <p className="blog-view-author">By {blog.author}</p>
        <div className="blog-view-body">{blog.body}</div>
      </div>
    </div>
  );
};

export default BlogView;

