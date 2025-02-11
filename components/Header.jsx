import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaSort } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    navigate("/new");
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="logo">
        <h1>🎯 Achievement Wall</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search projects..." />
      </div>

      {/* Buttons */}
      <div className="header-buttons">
        <button className="sort-button">
          <FaSort className="icon" /> Sort
        </button>

        <button className="add-new-button" onClick={handleAddNewClick}>
          <FaPlus className="icon" /> Add New
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
