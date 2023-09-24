import "./styles.css";
import { useState, useEffect } from "react";

const date = new Date();

export default function App() {
  const [project, setProject] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const Timer = setInterval(() => {
      const date = new Date();
      setProject({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(Timer);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <div className="clock">
          <div className="hour">{project.hours}:</div>
          <div className="hour">{project.minutes}:</div>
          <div className="hour">{project.seconds}</div>
        </div>
      </div>
    </div>
  );
}
