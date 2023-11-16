// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setAuthToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Send a login request to the backend
      const response = await fetch('backend-url/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // If successful, extract the token from the response
        const { token } = await response.json();

        // Store the token securely (e.g., in local storage)
        setAuthToken(token);

        // Navigate to the dashboard
        history.push('/dashboard');
      } else {
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Login form and input fields */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
