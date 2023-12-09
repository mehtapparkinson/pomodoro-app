import React from 'react';
import './PomodoroDescription.css'; // Ensure this path is correct

const PomodoroDescription = () => {
  return (
    <div className="pomodoro-description">
      <h2>🍅 Pomodoro Timer</h2>
      <p>
        Welcome to our Pomodoro Timer, a powerful productivity tool designed to
        boost your focus and efficiency. 🚀
      </p>
      <div className="feature-list">
        <h3>What is it? 🤔</h3>
        <p>
          The Pomodoro Technique is a time management method that encourages
          work in short, focused bursts (usually 25 minutes) followed by short
          breaks. Our timer automates this technique, helping you work smarter. 💡
        </p>
        <h3>Customizable ⚙️</h3>
        <ul>
          <li>Set your target total time. ⏳</li>
          <li>Define Pomodoro and break durations. ⏱️</li>
          <li>Track completed Pomodoros. 📊</li>
        </ul>
        <h3>Features 🌟</h3>
        <ul>
          <li>Automatic breaks and session tracking. ⏸️</li>
          <li>Audio notifications. 🔊</li>
          <li>Progress visualization with tomato icons. 🍅</li>
          <li>Start, pause, and reset controls. ▶️⏸️🔄</li>
        </ul>
        <h3>How to use 📋</h3>
        <ol>
          <li>Set your target time. ⏳</li>
          <li>Configure Pomodoro and break durations. ⏱️</li>
          <li>Click "Start" to begin a session. ▶️</li>
          <li>Focus during work periods and enjoy breaks. 🚀🏖️</li>
        </ol>
      </div>
      <p>
        Boost your productivity with Pomodoro Timer and accomplish more in
        less time! 🚀⏰
      </p>
    </div>
  );
};

export default PomodoroDescription;
