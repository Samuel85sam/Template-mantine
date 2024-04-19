import { Button, Container, createTheme } from '@mantine/core';

export const theme = createTheme({

  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },

    }),
    // TODO: comment accéder au 'marging' du container ? 
    // Container: Container.extend({
    //   defaultProps: {
    //     m: '2rem',
    //   },
    // }),
  },

});
