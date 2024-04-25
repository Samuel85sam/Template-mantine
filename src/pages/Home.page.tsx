/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */

import React, { useEffect } from 'react';
import { Box, Grid, Stack } from '@mantine/core';
import SliderBar from '../components/slider/slider';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NavbarSimple from '@/components/nav-bar/navbar';
// import Navlinks from '@/components/nav-links/nav-lnks';


const HomePage = () => {

  const screenSizeAdapt = () => {

    const resolution = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    console.log("Résolution de l'écran :", resolution);

    const dataSlider = {
      defaultValue: 70,
      min: 40,
      max: 100,
    };

    if (resolution.width < 500) {
      dataSlider.defaultValue = 30;
      dataSlider.min = 20;
      dataSlider.max = 50;
      console.log('small screen mode ON');
      return (dataSlider);
    }
    console.log('small screen mode OFF');

    return (dataSlider);
  };
  const dataSlider = screenSizeAdapt();

  

  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <NavbarSimple />
        </Grid.Col>
        <Grid.Col span={7}>
          <Stack>
            <Welcome />
            <ColorSchemeToggle />
            <Box
              miw={400}>
              <SliderBar
                min={dataSlider.min}
                max={dataSlider.max}
                defaultValue={dataSlider.defaultValue} />
            </Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default HomePage;
