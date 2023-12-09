import "./pomodor.css"; 
import { useState, useEffect } from "react";
import normalTomato from "./normal.png";
import checkedTomato from "./checked.png";
import notificationSound from "./notification.mp3"; 

const PomodoroApp = () => {
  const [totalHours, setTotalHours] = useState(5);
  const [totalMinutes, setTotalMinutes] = useState(12);
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(pomodoroDuration * 60);
  const [isActive, setIsActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [targetPomodoros, setTargetPomodoros] = useState(
    Math.floor((totalHours * 60 + totalMinutes) / pomodoroDuration)
  );
  const [sessionEnded, setSessionEnded] = useState(false);

  useEffect(() => {
    const totalDurationInMinutes = totalHours * 60 + totalMinutes;
    setTargetPomodoros(Math.ceil(totalDurationInMinutes / pomodoroDuration));
    setSecondsLeft(pomodoroDuration * 60);
  }, [totalHours, totalMinutes, pomodoroDuration]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      setSessionEnded(false);
      interval = setInterval(() => {
        setSecondsLeft((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(interval);
    }

    if (secondsLeft === 0 && !sessionEnded) {
      setSessionEnded(true);
      clearInterval(interval);
      setIsActive(false);

      const audio = new Audio(notificationSound);
      audio.play();

      audio.onended = () => {
        if (isWorkTime) {
          const userWantsBreak = window.confirm(
            "Pomodoro completed! Do you want to take a break?"
          );
          if (userWantsBreak) {
            setIsWorkTime(false);
            setSecondsLeft(breakDuration * 60); 
          } else {
            setCompletedPomodoros((pomodoros) => pomodoros + 1);
            setSecondsLeft(pomodoroDuration * 60); 
          }
        } else {
          setIsWorkTime(true);
          setSecondsLeft(pomodoroDuration * 60);
        }
      };
    }

    return () => clearInterval(interval);
  }, [
    isActive,
    secondsLeft,
    isWorkTime,
    breakDuration,
    pomodoroDuration,
    sessionEnded,
  ]);

  const getTotalRegisteredTime = () => {
    const totalMinutesCompleted = completedPomodoros * pomodoroDuration;
    const currentSessionElapsed = isWorkTime
      ? pomodoroDuration * 60 - secondsLeft
      : 0;
    const totalMinutes =
      totalMinutesCompleted + Math.floor(currentSessionElapsed / 60);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hour(s) and ${minutes} minute(s)`;
  };

  const handlePomodoroDurationChange = (e) => {
    setPomodoroDuration(Math.max(1, Number(e.target.value))); 
  };

  const handleBreakDurationChange = (e) => {
    setBreakDuration(Math.max(1, Number(e.target.value)));
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(pomodoroDuration * 60);
    setIsWorkTime(true);
    setCompletedPomodoros(0);
    setSessionEnded(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const renderTomatoes = () => {
    return Array.from({ length: targetPomodoros }, (_, index) => (
      <img
        key={index}
        src={index < completedPomodoros ? checkedTomato : normalTomato}
        alt="Tomato"
        style={{ width: "30px", height: "30px" }}
      />
    ));
  };

  return (
    <div className="pomodoro-container">
      <div className="input-container container">
      <h1>Pomodoro Timer</h1>
        <label htmlFor="total-hours">Target Time - Hours:</label>
        <input
          id="total-hours"
          type="number"
          value={totalHours}
          onChange={(e) => setTotalHours(Math.max(0, Number(e.target.value)))}
        />
        <label htmlFor="total-minutes">Target Time - Minutes:</label>
        <input
          id="total-minutes"
          type="number"
          value={totalMinutes}
          onChange={(e) => setTotalMinutes(Math.max(0, Number(e.target.value)))}
        />
        <label htmlFor="pomodoro-duration">Pomodoro Duration (minutes):</label>
        <input
          id="pomodoro-duration"
          type="number"
          value={pomodoroDuration}
          onChange={handlePomodoroDurationChange}
        />
        <label htmlFor="break-duration">Break Duration (minutes):</label>
        <input
          id="break-duration"
          type="number"
          value={breakDuration}
          onChange={handleBreakDurationChange}
        />
      
      <p>
        <strong>Target Time:</strong> {totalHours} hours and {totalMinutes} minutes
      </p>
      <p><strong>Target Pomodoros:</strong> {targetPomodoros}</p>
      <p><strong>Total Registered Time:</strong> {getTotalRegisteredTime()}</p>
      <p className="timer">{formatTime()}</p>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
      <p className="info">{isWorkTime ? "Work Time" : "Break Time"}</p>
      <div>{renderTomatoes()}</div>
      </div>
    </div>
  );
};

export default PomodoroApp;
