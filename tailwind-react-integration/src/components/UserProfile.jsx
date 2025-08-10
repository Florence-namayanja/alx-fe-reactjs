import React from "react";
import "./UserProfile.css"; // External CSS for styles

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt={user.name}
          className="user-profile-avatar"
        />
        <h1 className="user-profile-name">{user.name}</h1>
        <p className="user-profile-email">{user.email}</p>
        <p className="user-profile-bio">{user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
