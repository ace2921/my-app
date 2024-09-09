import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './components/home/Signup';
import './App.css';
import ProtectedRoutes from './components/Login/ProtectedRoute';

// Create an AuthContext to manage the authentication state
const AuthContext = createContext();

// AuthProvider component to provide auth state and login function
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};

// ProtectedRoute component to protect routes
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? element : <Navigate to="/login" />;
};
// Example protected page component
const ProtectedPage = () => {
  return <h2>This is a protected page. Only visible to authenticated users.</h2>;
};

// Login component for authentication
const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleLogin = (username, password) => {
    // e.preventDefault();

    // Simple authentication logic (for demonstration purposes)
    if ({username}  && {password}) {
      login(); // Set isAuthenticated to true
      setMessage(`Welcome back, ${username}!`);
      alert('User has been successfully logged in!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <h2>Login Page</h2>
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Login</button>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message && <p style={{ color: message === 'Invalid username or password' ? 'red' : 'green' }}>{message}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          {/* <h1>Sign Up</h1>/
          <Signup /> */}
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          {/* <Link to="/login">Login</Link> */}
          <Link to="/login">Protected Page</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute element={<ProtectedPage />} />} path="/protected" />
          <Route element={<ProtectedRoutes />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
