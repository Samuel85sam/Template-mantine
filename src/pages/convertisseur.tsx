import React from 'react';
import { Center, Box, Stack, Grid } from '@mantine/core';
import HomePageButton from '@/components/Home-Page_link/home-Page_button';
import NavbarSimple from '@/components/nav-bar/navbar';

const Convertisseur = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <NavbarSimple />
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack>
            convertisseur
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

export default Convertisseur;