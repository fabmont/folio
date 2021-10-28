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
      fabmont &copy; {new Date().getFullYear()}. All Rights Reserved.
    </Text>
  </Box>
);

export default Footer;
