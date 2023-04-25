import React, { useState } from "react";
import "../src/css/blogform.css";

const BlogForm = () => {
  // Define state variables for title, body, and image
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser behavior
    console.log(title, body, image); // Log the title, body, and image for testing
    // TODO: Add logic to send the data to your CMS or backend
  };

  // Define a function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="bf">
      <h1>Create a new blog post</h1>
      <div className="blog-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
