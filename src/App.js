import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import PomodoroDescription from './PomodoroDescription';
import PomodoroApp from './pomodoro';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/how-it-works" element={<PomodoroDescription />} />
          <Route path="/" element={<PomodoroApp />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
