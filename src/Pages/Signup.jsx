import React, { useState } from 'react';
// import '../../public/Css/signup.css'

import { Link , useNavigate} from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();  // use for prevent refresh after submit
    try{
    setLoading(true);// before request  
    const res=await fetch('http://localhost:8080/api/auth/signup',
    {
      method:'post',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
     
    const data=await res.json();
    console.log(data);

    if(data.success===false)
    {
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/signin');
  }
  catch(error)
  {
    setLoading(false);
    setError(error.message)
  }
  };
  console.log(formData)
  return (
    <div>
      <div className="signin-container">
      <h2>Sign Up</h2>
      <div className="input-group">
        {/* <FontAwesomeIcon icon={faUser} className="icon" /> */}
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-group">
        {/* <FontAwesomeIcon icon={faLock} className="icon" /> */}
        <input type="password" placeholder="Password" />
      </div>
      <div className="input-group">
        {/* <FontAwesomeIcon icon={faLock} className="icon" /> */}
        <input type="email" placeholder="Email" />
      </div>
      <Link to="/signin"><button className="signin-button">
      Sign Up
      </button></Link>
      
      </div>
        
    </div>
  );
}

export default Signup;
