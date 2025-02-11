import React, { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewPage from '../components/AddNewPage'; 

const App = () => {
  const [projects, setProjects] = useState([
    {
      name: "Telegram Bot",
      liveLink: "https://telegram.com",
      description: "A bot for automated notifications on Telegram.",
      lastUpdated: "Jan 22, 2024",
    },
    {
      name: "Dice Game VL6",
      liveLink: "https://dicegame.com",
      description: "A fun dice-rolling game with random outcomes.",
      lastUpdated: "Sep 7, 2024",
    },
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
