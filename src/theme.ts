import { Button, Container, createTheme, ContainerProps } from '@mantine/core';
import cx from 'clsx';
import classes from './theme.module.css';

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),

    Container: Container.extend<ContainerProps>({
      defaultProps: {
        classNames: (_, { size }) => ({
          root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
        }),
        // Définir les props maxWidth et padding dans defaultProps
        maxWidth: 800,
        padding: 'md',
      },
    }),
  },
});
