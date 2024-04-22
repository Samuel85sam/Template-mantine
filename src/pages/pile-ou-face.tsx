import React from 'react';
import { Center, Box, Grid, Stack } from '@mantine/core';
import HomePageButton from '@/components/Home-Page_link/home-Page_button';
import NavbarSimple from '@/components/nav-bar/navbar';

const PileOuFace = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <NavbarSimple />
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack>
            Pile ou Face
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


export default PileOuFace;
