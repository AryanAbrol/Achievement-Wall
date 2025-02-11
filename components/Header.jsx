import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    navigate("/new");
  };

  return (
    <div className="header">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search Projects..."
        />
      </div>
      <div className="header-buttons">
        <button className="sort-button">Sort by Activity</button>
        <button className="add-new-button" onClick={handleAddNewClick}>
          Add New
        </button>
      </div>
    </div>
  );
};

export default Header;
