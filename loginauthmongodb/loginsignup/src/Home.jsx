import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, such as clearing session/local storage
    // For example:
    localStorage.removeItem('token'); // Assuming you store a token for authentication
    // Navigate to the login page after logout
    navigate('/login');
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="card shadow p-4 rounded w-25">
        <h2 className="text-center mb-4">Welcome User Page</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mauris non eros pretium, eget euismod felis posuere.</p>
        <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
