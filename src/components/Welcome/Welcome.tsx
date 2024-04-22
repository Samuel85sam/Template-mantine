import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          My Port-Folio
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        i propose you to try 3 basics apps to discover the way i work and what i can do using REACT and Mantine. Here is also my {' '}
        <Anchor href="https://github.com/Samuel85sam" size="lg">
          My Github
        </Anchor>
      </Text>
    </>
  );
}
