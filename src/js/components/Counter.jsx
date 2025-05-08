import React, { useEffect, useState } from "react";

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(previousSeconds => previousSeconds + 1);
      }, 1000);

    } else  {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const secondsStr = String(seconds).padStart(6, '0').split('');

  return (
    <div className="d-flex justify-content-center align-items-center bg-black">
          <i className="fa-solid fa-clock fa-5x" style={{ color: 'red' }}></i>
        
          {secondsStr.map((digit, index) => (
            <div className="box" key={index}>
              <div className="value">{digit}</div>
            </div>
          ))}
          
        
      <button onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset} style={{marginLeft: '10px'}}>
        Reset
      </button>
      
    </div >
  )



};

export default SecondsCounter
