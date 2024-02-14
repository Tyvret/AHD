import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 1, 17); // February is month index 1
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dagar: Math.floor(difference / (1000 * 60 * 60 * 24)),
        timmar: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minuter: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        sekunder: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted or the countdown reaches 0
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={interval}>
        <br />
        {timeLeft[interval]} {interval}
      </span>
    );
  });

  return <div className="timer">{timerComponents}</div>;
}

export default CountdownTimer;
