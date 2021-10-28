import { Box } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box align="center" opacity={0.4} fontSize="sm">
    &copy; {new Date().getFullYear()} Fabrício Monteiro. All Rights Reserved.
  </Box>
);

export default Footer;
