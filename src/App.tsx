/* eslint-disable no-restricted-globals */
import '@mantine/core/styles.css';
import { Grid, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import NavbarSimple from './components/nav-bar/navbar';

export default function App() {
//? condition ternaire et un props pour pouvoir effectuer un retour à la "home page " depuis la navbar? 
  return (
    <MantineProvider theme={theme}>
      <Grid>
        <Grid.Col span={2}> <NavbarSimple /> </Grid.Col>
        <Grid.Col span={10}> <Router /> </Grid.Col>

      </Grid>
    </MantineProvider>
  );
}
// TODO : il faut gérer l'overlap de la bare de slide lorsqu'on est en fenêtre réduite
