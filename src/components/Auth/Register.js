// Register.js

import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleRegister = async () => {
    try {
      // Send a registration request to the backend
      const response = await fetch('backend-url/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <input type="password" placeholder="Password" onChange={handlePasswordChange} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
