import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box
    display="flex"
    alignItems="center"
    textAlign="center"
    opacity={0.4}
    fontSize="sm"
    w="100%"
    py="4"
  >
    <Text w="100%">
      &copy; {new Date().getFullYear()} Fabrício Monteiro. All Rights Reserved.
    </Text>
  </Box>
);

export default Footer;
