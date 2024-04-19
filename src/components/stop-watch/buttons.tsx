import { Button, Flex } from '@mantine/core';
import React from 'react';

function Buttons({ isRunning, startStop, reset }) {
  return (
    <>
      <Flex
      gap={'30px'}>
        <Button onClick={startStop}>{isRunning ? "Stop" : "Start"}</Button>
        <Button onClick={reset}>Reset</Button>
      </Flex>
    </>
  );
}

export default Buttons;
