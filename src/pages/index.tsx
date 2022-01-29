import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Button,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from 'react-icons/io5';
import { BioSection, BioYear } from '../components/BioSection';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import timeline from '../constants/timeline';
import {
  githubUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl,
  youtubeUrl,
} from '../constants/social-networks';

const Home: React.FC = () => (
  <div>
    <Container>
      <Box
        display={{ md: 'flex' }}
        alignItems="center"
        my="8"
        pb="8"
        borderBottom={`1px solid ${useColorModeValue(
          '#00000020',
          '#ffffff20',
        )}`}
      >
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          mr={{ md: 6 }}
          mb="4"
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            objectFit="cover"
            objectPosition="0 0"
            borderRadius="3xl"
            src="/me.jpg"
            alt="Profile image"
          />
        </Box>
        <Box flexGrow={1} textAlign={['center', 'start']}>
          <Heading as="h2" variant="page-title">
            Fabs
          </Heading>
          <p>Software Engineer (JavaScript / React / Node.JS / Design)</p>
        </Box>
      </Box>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Hello!
        </Heading>
        <Paragraph>
          I&apos;m Fabrício (but you can call me Fabs). I am a software engineer
          focused on frontend development. Since I&apos;ve started coding,
          I&apos;ve found my passion with the <b>JavaScript</b> and <b>React</b>{' '}
          world.
        </Paragraph>
        <Paragraph>
          I&apos;ve already worked for small and big companies, which gave me
          lots of experience on a bunch types of situations.
        </Paragraph>
        <Paragraph>
          I love to spend some time with my family, watch some movies/tv shows,
          play my favorite songs on the guitar, and also I am always reading
          about what&apos;s new in the tech world to be as much updated as I
          can.
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

      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          My journey
        </Heading>

        {timeline.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <BioSection key={idx}>
            <BioYear>{item.year}</BioYear>
            {item.description}
          </BioSection>
        ))}
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
              leftIcon={<Icon as={IoLogoTwitter} />}
            >
              @fabsmont
            </Button>
          </Link>
        </SimpleGrid>
      </Section>
    </Container>
  </div>
);

export default Home;
