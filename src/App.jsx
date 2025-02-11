import React, { useState } from 'react';
import './App.css';
import Toolbar from '../components/Toolbar';
import AchievementWall from '../components/AchievementWall';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewPage from '../components/AddNewPage'; // Import AddNewPage component

const App = () => {
  const [projects, setProjects] = useState([
    {
      name: "telegram-bot",
      liveLink: "https://telegram",
      description: "Telegram Bot for notifications",
      lastUpdated: "Jan 22",
    },
    {
      name: "dice-game-vl6",
      liveLink: "https://dice",
      description: "Dice Game with a random roll",
      lastUpdated: "Sep 7, 2024",
    },
    // Add more project objects as needed
  ]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="projects-container">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          } />
          <Route path="/new" element={<AddNewPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
