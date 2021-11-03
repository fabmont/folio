import { Heading, Box, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Section from '../components/Section';

const NotFound: React.FC = () => (
  <Section>
    <Box w="100%" my="12" textAlign="center">
      <Heading size="4xl">{'<404 />'}</Heading>
      <Text my="8" size="lg">
        I&apos;m sorry... but this page doesn&apos;t exists.
      </Text>

      <NextLink href="/">
        <Button colorScheme="blue" variant="outline">
          Back to home
        </Button>
      </NextLink>
    </Box>
  </Section>
);

export default NotFound;
