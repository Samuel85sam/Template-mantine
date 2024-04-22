import React from 'react';
import { Stack, Box, Center, Grid } from '@mantine/core';
import HomePageButton from '@/components/Home-Page_link/home-Page_button';
import StopWatchInterface from '@/components/stop-watch/Stop-watch-interface';
import NavbarSimple from '@/components/nav-bar/navbar';

const StopWatch = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <NavbarSimple />
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack>
            <StopWatchInterface />
            <Center>
              <Box>
                <HomePageButton />
              </Box>
            </Center>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default StopWatch;
