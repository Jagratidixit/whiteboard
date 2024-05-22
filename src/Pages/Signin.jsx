import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../public/Css/signin.css'

function Signin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a successful login for testing purposes
    setTimeout(() => {
      setLoading(false);
      navigate('/try');
    }, 1000);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="signin-button" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <div className="options">
        <a href="#">Forgot Password?</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default Signin;
