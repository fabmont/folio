import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
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
      <Avatar src="/me2.png" size="lg" borderRadius="lg" mt="8" />
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
        of experience on a bunch types of situations. Currently I have been
        working in early stage tech startups, which is a great experience to
        learn and grow.
      </Paragraph>
      <Paragraph>
        I love to spend some time with my family, watch some movies/tv shows,
        play my favorite songs on the guitar.
      </Paragraph>
      <Box display="flex" justifyContent="center" my={4}>
        <NextLink href="/work">
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
            variant="outline"
            size="xs"
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
      <Flex gap="4">
        <Link href={githubUrl} target="_blank">
          <IconButton variant="link" aria-label="github" colorScheme="gray">
            <Icon as={IoLogoGithub} fontSize="24px" />
          </IconButton>
        </Link>

        <Link href={linkedinUrl} target="_blank">
          <IconButton variant="link" colorScheme="gray" aria-label="linkedin">
            <Icon as={IoLogoLinkedin} fontSize="24px" />
          </IconButton>
        </Link>

        <Link href={instagramUrl} target="_blank">
          <IconButton variant="link" colorScheme="gray" aria-label="instagram">
            <Icon as={IoLogoInstagram} fontSize="24px" />
          </IconButton>
        </Link>

        <Link href={youtubeUrl} target="_blank">
          <IconButton variant="link" colorScheme="gray" aria-label="youtube">
            <Icon as={IoLogoYoutube} fontSize="24px" />
          </IconButton>
        </Link>

        <Link href={twitterUrl} target="_blank">
          <IconButton variant="link" colorScheme="gray" aria-label="twitter">
            <Icon as={FaXTwitter} fontSize="24px" />
          </IconButton>
        </Link>
      </Flex>
    </Section>
  </Container>
);

export default Home;
