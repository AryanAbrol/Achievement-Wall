import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewPage = () => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [githubId, setGithubId] = useState("");
  const [otherLinks, setOtherLinks] = useState("");

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    console.log({
      name,
      profileImage,
      githubId,
      otherLinks,
    });

    navigate("/");
  };

  return (
    <div className="add-new-container">
      <h1>Add Your Details</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-field">
          <label>Profile Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {profileImage && <img src={profileImage} alt="Profile" width="100" />}
        </div>

        <div className="form-field">
          <label>GitHub ID:</label>
          <input
            type="text"
            value={githubId}
            onChange={(e) => setGithubId(e.target.value)}
            placeholder="Enter GitHub ID"
          />
        </div>

        <div className="form-field">
          <label>Other Achievement Links:</label>
          <input
            type="text"
            value={otherLinks}
            onChange={(e) => setOtherLinks(e.target.value)}
            placeholder="Enter other achievement links"
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddNewPage;
