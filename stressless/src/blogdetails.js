import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogdata";
import '../src/css/blogdetails.css'


function BlogDetailPage() {
    const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === id);

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetailPage;