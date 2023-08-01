import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

function Timer() {
  const [dateTime, setDateTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/26/2023 18:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDateTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" id="container">
      {dateTime ? (
        <h1>Hugging Time</h1>
      ) : (
        <>
          <h1 className="header">Time until I can hold my sweet Caroline close</h1>
          <div className="timerContainer">
            <div className="time">
              <span className="digits">{days}</span>
              <span className="units">DAYS</span>
            </div>
            <div className="time">
              <span className="digits">{hours}</span>
              <span className="units"> HOURS</span>
            </div>
            <div className="time">
              <span className="digits">{minutes}</span>
              <span className="units">MINS</span>
            </div>
            <div className="time">
              <span className="digits">{seconds}</span>
              <span className="units">SECS </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
