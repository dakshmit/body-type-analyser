import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/signup", formData);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || "Error signing up");
    }
  };

  return (
    <div className ="signup , page">
    
     
      <form onSubmit={handleSubmit} className="signupcard">
      <h2>Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      
      </div>
  
  );
};

export default Signup;
