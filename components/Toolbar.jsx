// Toolbar.js
import React from 'react';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="profile-section">
        <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        <h2>User's Name</h2>
        <p>User Bio</p>
      </div>
      <div className="menu">
        <ul>
          <li>Dashboard</li>
          <li>Achievements</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
