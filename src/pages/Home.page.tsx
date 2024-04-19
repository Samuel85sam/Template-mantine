/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import { Box, Container } from '@mantine/core';
import SliderBar from '../components/slider/slider';
import { Flex } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Navlinks from '@/components/nav-links/nav-lnks';


export function HomePage() {
  return (
    <>
      <Container>
        <Flex
          direction="column"
          gap="lg"
        >
          <ColorSchemeToggle />
          <Welcome />
          <Navlinks />
          <SliderBar />
        </Flex>
      </Container>
    </>
  );
  // TODO:  menu différent pour les thèmes
}