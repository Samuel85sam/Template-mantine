/* eslint-disable no-restricted-globals */
import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
//? condition ternaire et un props pour pouvoir effectuer un retour à la "home page " depuis la navbar? 
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
// TODO : il faut gérer l'overlap de la bare de slide lorsqu'on est en fenêtre réduite
// TODO : comment switcher d'une mise en page à une autre pour avoir un rendu utilisable sur tous les mobiles et les taille d'écrans??? 
