/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import { Container } from '@mantine/core';
import SliderBar from '../components/slider/slider';
import { Flex } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Navlinks from '@/components/nav-links/nav-lnks';


export function HomePage() {
  return (
    <>
      <Flex
        mih={50}
        gap="lg"
        justify="flex-start"
        align="center"
        direction="column"
      >
        <Container>
          <ColorSchemeToggle />
        </Container>
        <Container>
          <Welcome />
        </Container>
        <Navlinks />
      </Flex>
      <Container
      style={{ margin: 40 }}
      >
        <SliderBar />
      </Container>
    </>
  );
  // TODO:  menu différent pour les thèmes
}