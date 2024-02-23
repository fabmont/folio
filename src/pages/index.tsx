import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from 'react-icons/io5';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import {
  githubUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl,
  youtubeUrl,
} from '../constants/social-networks';

const Home: React.FC = () => (
  <Container maxW="full">
    <Section delay="0.1">
      <Heading as="h3" variant="section-title" fontSize="3xl" mt="8">
        Hello!
      </Heading>
      <Paragraph>
        I&apos;m Fabrício (but you can call me Fab). I am a software engineer
        focused on frontend development. Since I&apos;ve started coding,
        I&apos;ve found my passion with the <b>JavaScript</b> and <b>React</b>{' '}
        world.
      </Paragraph>
      <Paragraph>
        I&apos;ve already worked for small and big companies, which gave me lots
        of experience on a bunch types of situations.
      </Paragraph>
      <Paragraph>
        I love to spend some time with my family, watch some movies/tv shows,
        play my favorite songs on the guitar, and also I am always reading about
        what&apos;s new in the tech world to be as much updated as I can.
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/work">
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
            variant="outline"
          >
            Check my work
          </Button>
        </NextLink>
      </Box>
    </Section>

    <Section delay="0.3">
      <Heading as="h3" variant="section-title">
        Reach me!
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={['4', '2']}>
        <Link href={githubUrl} target="_blank">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<Icon as={IoLogoGithub} />}
          >
            @fabmont
          </Button>
        </Link>

        <Link href={linkedinUrl} target="_blank">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<Icon as={IoLogoLinkedin} />}
          >
            Fabrício Monteiro
          </Button>
        </Link>

        <Link href={instagramUrl} target="_blank">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<Icon as={IoLogoInstagram} />}
          >
            @fab_mont
          </Button>
        </Link>

        <Link href={youtubeUrl} target="_blank">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<Icon as={IoLogoYoutube} />}
          >
            Fabrício Monteiro
          </Button>
        </Link>

        <Link href={twitterUrl} target="_blank">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<Icon as={FaXTwitter} />}
          >
            @fabsmont
          </Button>
        </Link>
      </SimpleGrid>
    </Section>
  </Container>
);

export default Home;
