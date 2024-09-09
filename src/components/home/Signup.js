import React, { useState } from 'react';
import './Signup.css'


const Signup = () => {
  const [formData, setFormData] = useState({
     username: '',
     email: '',
     password: '',
     confirmPassword: '' 
  });

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const response = await fetch('http://localhost:8000/signup', { // Ensure port matches backend
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
      },
        body: JSON.stringify(formData),
       });

      const data = await response.json();

     if (response.ok) {
         alert(data.message);
       } else {
         alert(data.message || 'Something went wrong');
      }
     } catch (error) {
       console.error('Error:', error);
       alert('Error connecting to the server');
     }
   };

 return (
   <form onSubmit={handleSubmit} className='body'>
     <div className="background-animation">
      <img src={`${process.env.PUBLIC_URL}/walking guy.gif`} alt="Guy walking" className="walking-guy" />
      {/* <img src={`${process.env.PUBLIC_URL}/d6b724c585cfce2a34f1c449d51dcd93.gif`} alt="Guy walking" className="walking-guy" /> */}
     </div>
    <label className='name'>Sign up Page</label>

     <input
       type="text"
       name="username"
       value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
        className='username'
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
       <input
         type="password"
         name="confirmPassword"
         value={formData.confirmPassword}
         onChange={handleChange}
         placeholder="Confirm Password"
         required
       />
       <button type="submit">Sign Up</button>
     </form>
  );
 };



 export default Signup;
