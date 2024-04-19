import React from 'react'
import { useState, useEffect } from 'react';

const StopWatchInterface = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(prevMinutes => prevMinutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours(prevHours => prevHours + 1);
    }
  }, [seconds, minutes]);
  return (
    <div>StopWatchInterface</div>
  )
}

export default StopWatchInterface

//TODO: typeScript ou pas ??? 