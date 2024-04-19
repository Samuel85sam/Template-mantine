import React from 'react';
import { Stack, Box, Center } from '@mantine/core';
import HomePageButton from '@/components/Home-Page_link/home-Page_button';
import StopWatchInterface from '@/components/stop-watch/Stop-watch-interface';

const StopWatch = () => {
  return (
    <>
      <Stack>
        <StopWatchInterface />
        <Center>
          <Box>
            <HomePageButton />
          </Box>
        </Center>
      </Stack>
    </>
  );
};

export default StopWatch;
