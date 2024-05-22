// AddBlogForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../public/Css/addform.css'

function AddBlogForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    heading: '', // Changed from 'name' to 'heading'
    about: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const [blogs, setBlogs] = useState([]);
    
    const handleAddBlog = (newBlogData) => {
        setBlogs([...blogs, newBlogData]); // Add new blog to the existing list of blogs
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onSubmit(formData);
    // Reset the form after submission (moved to the parent component)
  };

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      <label htmlFor="heading">Heading:</label> {/* Changed id from 'name' to 'heading' */}
      <input type="text" id="heading" value={formData.heading} onChange={handleChange} required />

      <label htmlFor="about">About:</label>
      <textarea id="about" value={formData.about} onChange={handleChange} required></textarea>

      <label htmlFor="image">Image URL:</label>
      <input type="text" id="image" value={formData.image} onChange={handleChange} required />
    <Link to={'/blog'}><button type="submit" onSubmit={handleAddBlog}>Submit</button></Link>
    </form>
  );
}

export default AddBlogForm;
