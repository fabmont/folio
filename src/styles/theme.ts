import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#F0F0E2', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#63B2ED')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: 'Space Grotesk',
};

const colors = {
  grassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'dark',
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
