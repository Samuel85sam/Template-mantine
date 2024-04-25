import React from 'react';
import { Center, Box, Stack, Grid } from '@mantine/core';
import HomePageButton from '@/components/Home-Page_link/home-Page_button';
import NavbarSimple from '@/components/nav-bar/navbar';
import ConvertisseurForm from '@/components/Convertisseur/convertisseur.form';
import ConvertisseurButtons from '@/components/Convertisseur/convertisseur.buttons';
import ConvertisseurDisplay from '@/components/Convertisseur/convertisseur.display';
import classes from '../components/Convertisseur/convertisseur.module.css'

const Convertisseur = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <NavbarSimple />
        </Grid.Col>
        <Grid.Col span={9}>
          <Center>
            <Stack
              gap={80}>
              <Box
                mt={80}
              >
                <div
                  className={classes.title}>
                  Convertisseur
                </div>
                <ConvertisseurDisplay />
                <Box
                  mt={80}
                >
                  <ConvertisseurForm />
                </Box>
                <Box
                  mt={80}
                >
                  <ConvertisseurButtons />
                </Box>
              </Box>
              <Center>
                <Box>
                  <HomePageButton />
                </Box>
              </Center>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Convertisseur;