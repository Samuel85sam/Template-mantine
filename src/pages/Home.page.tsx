/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import { Box, Container, Stack } from '@mantine/core';
import SliderBar from '../components/slider/slider';
import { Flex } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import Navlinks from '@/components/nav-links/nav-lnks';


export function HomePage() {
  return (
    <>
      <Container>
        <Stack
        >
          {/* <Navlinks /> */}
          <Welcome />
          <ColorSchemeToggle />
          <Container>
            <Box
            miw={500}>
              <SliderBar />
            </Box>
          </Container>
        </Stack>
      </Container>
    </>
  );
  // TODO:  menu différent pour les thèmes
}