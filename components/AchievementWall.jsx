// AchievementWall.js
import React, { useState } from 'react';
import AchievementCard from './ProjectCard';

const AchievementWall = () => {
  const [achievements, setAchievements] = useState([
    { platform: { name: 'GitHub', icon: '/path/to/github-icon.png' }, stats: '50 Repos, 10K Stars', progress: '5% more this month' },
    { platform: { name: 'LeetCode', icon: '/path/to/leetcode-icon.png' }, stats: '200 Problems Solved', progress: '10 Problems this week' },
    // Add more achievements here
  ]);

  return (
    <div className="achievement-wall">
      <header>
        <h1>Achievement Wall</h1>
        <button>Share</button>
      </header>
      <div className="card-container">
        {achievements.map((item, index) => (
          <AchievementCard key={index} platform={item.platform} stats={item.stats} progress={item.progress} />
        ))}
      </div>
    </div>
  );
};

export default AchievementWall;
