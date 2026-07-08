import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Profile.css';
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser, login } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Simulate updating user
    const users = JSON.parse(localStorage.getItem('usersDB') || '[]');
    const updatedUsers = users.map(u => u.email === currentUser.email ? { ...u, password } : u);
    localStorage.setItem('usersDB', JSON.stringify(updatedUsers));
    
    // Update current context
    login({ ...currentUser, password });
    setMessage('Profile updated successfully!');
    setPassword('');
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        <p><strong>Email:</strong> {currentUser.email}</p>
        
        <form onSubmit={handleUpdate} className="profile-form">
          <h3>Change Password</h3>
          {message && <p className="success-msg">{message}</p>}
          <div className="input-group">
            <label>New Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary">Update Profile</button>
          <Link to="/">
          <button class="btn-back">Back</button>
        </Link>
        </form>
      </div>
    </div>
  );
};

export default Profile;
