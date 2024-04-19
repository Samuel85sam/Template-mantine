import React from 'react';
import { Text } from '@mantine/core';

function Display({ hours, minutes, seconds }) {
  const formatTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <>
      <Text
        size={"80px"}
        fw={900}
        variant="gradient"
        gradient={{ from: 'yellow', to: 'red', deg: 147 }}
        >
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </Text>
    </>
  );
}

export default Display;
