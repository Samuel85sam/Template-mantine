/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */

import React from 'react';
import { Box, Grid, Stack, useMantineTheme } from '@mantine/core';
import SliderBar from '../components/slider/slider';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NavbarSimple from '@/components/nav-bar/navbar';
// import Navlinks from '@/components/nav-links/nav-lnks';


const HomePage = () =>  {

  const theme = useMantineTheme();

  let defaultValue = 70;
  let min = 50;
  let max = 130;
  if (theme.breakpoints.xs === '30em') {
    console.log('XS screen !!!');
    
    defaultValue = 40;
    min = 20;
    max = 50;
  } 
  return (
    <>
        <Grid>
          <Grid.Col span={3}>
            <NavbarSimple />
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack>
              <Welcome />
              <ColorSchemeToggle />
                <Box
                  miw={500}>
                  <SliderBar min={min} max={max} defaultValue={defaultValue} />
                </Box>
            </Stack>
          </Grid.Col>
        </Grid>
    </>
  );
  // TODO:  menu différent pour les thèmes
};

export default HomePage;
