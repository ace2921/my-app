// import React, { useState } from 'react';
// import { useAuth } from './AuthContext'; // Assuming useAuth is exported from AuthContext

// const Login = () => {
//   const { login } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple authentication logic (for demonstration purposes)
//     if (username === 'user' && password === 'password') {
//       login(); // Set isAuthenticated to true
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       {!showForm ? (
//         <button onClick={() => setShowForm(true)}>Login</button>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <div>
//             <label>Username: </label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Password: </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;
