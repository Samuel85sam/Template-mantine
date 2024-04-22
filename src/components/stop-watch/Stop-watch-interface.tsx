import React, { useState, useEffect } from 'react';
import { Flex } from '@mantine/core';
import Display from './display';
import Buttons from './buttons';
import classes from './stop-watch.module.css';


const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
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

  const startStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <>
      <Flex
        mih={50}
        gap="lg"
        justify="center"
        align="center"
        direction="column"
      >
        <div
          className={classes.title}>
          Stop-Watch
        </div>
        <Display hours={hours} minutes={minutes} seconds={seconds} />
        <Buttons isRunning={isRunning} startStop={startStop} reset={reset} />
      </Flex>
    </>
  );
};

export default Stopwatch;
