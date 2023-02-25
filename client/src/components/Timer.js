import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {if (prevTime === 0) {
        clearInterval(timer);
        return prevTime;
      } else {
        return prevTime - 1;
      }});
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2 className='flex justify-center bg-teal-500 font-bold text-2xl'>Timer: {`${minutes}:${seconds}`}</h2>
    </div>
  );
}

export default Timer;
