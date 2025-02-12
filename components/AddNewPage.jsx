import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { FaGithub, FaLink } from "react-icons/fa";
import "../src/App.css";

const AddNewPage = () => {
  const [widgets, setWidgets] = useState([]);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [githubId, setGithubId] = useState("");
  const [otherLinks, setOtherLinks] = useState("");

  const fileInputRef = useRef(null); // Ref for the file input

  // Handle the image change
  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle removing the image and resetting the file input to default state
  const handleRemoveImage = () => {
    setProfileImage(null); // Clear the image
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input to its default state
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!name) return;

    const newWidget = {
      id: Date.now(),
      name,
      profileImage,
      githubId,
      otherLinks,
      position: { x: 0, y: 0 },
    };

    setWidgets([...widgets, newWidget]);

    // Reset fields after submission
    setName("");
    setProfileImage(null);
    setGithubId("");
    setOtherLinks("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input to its default state after submission
    }
  };

  return (
    <div className="page-container">
      {/* Sidebar Form */}
      <div className="sidebar">
        <h2>🎯 Achievement Generator</h2>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="form-field">
          <label>Profile Image:</label>
          <input
            ref={fileInputRef} // Attach the ref to the file input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {profileImage && (
            <div className="preview-img-container">
              <img src={profileImage} alt="Profile" className="preview-img" />
              <button className="remove-img-btn" onClick={handleRemoveImage}>
                ✖
              </button>
            </div>
          )}
        </div>

        <div className="form-field">
          <label>GitHub ID:</label>
          <input
            type="text"
            value={githubId}
            onChange={(e) => setGithubId(e.target.value)}
            placeholder="GitHub ID"
          />
        </div>

        <div className="form-field">
          <label>Other Links:</label>
          <input
            type="text"
            value={otherLinks}
            onChange={(e) => setOtherLinks(e.target.value)}
            placeholder="Other links"
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          ➕ Add Achievement
        </button>
      </div>

      {/* Restricted Widget Area */}
      <div className="widget-area">
        {widgets.map((widget) => (
          <Draggable key={widget.id} bounds="parent">
            <ResizableBox
              width={250}
              height={150}
              minConstraints={[200, 100]}
              maxConstraints={[400, 300]}
            >
              <div className="achievement-widget">
                {widget.profileImage && (
                  <img src={widget.profileImage} alt="Profile" className="widget-img" />
                )}
                <h3>{widget.name}</h3>
                {widget.githubId && (
                  <p>
                    <FaGithub /> {widget.githubId}
                  </p>
                )}
                {widget.otherLinks && (
                  <p>
                    <FaLink />{" "}
                    <a href={widget.otherLinks} target="_blank" rel="noopener noreferrer">
                      More
                    </a>
                  </p>
                )}
              </div>
            </ResizableBox>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default AddNewPage;