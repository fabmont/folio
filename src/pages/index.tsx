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
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
} from 'react-icons/io5';
import { BioSection, BioYear } from '../components/BioSection';
import Section from '../components/Section';

const timeline = [
  {
    year: '1998',
    description: 'Born in Brasília, Brazil.',
  },
  {
    year: '2012',
    description: (
      <>
        Started to write your first lines of code with <b>C#</b> and{' '}
        <b>Visual Basic</b>. Also started a &quot;company&quot; called{' '}
        <b>Vault Computer</b> with school friend.
      </>
    ),
  },
  {
    year: '2017',
    description:
      'Started to study Software Engineering at Universidade de Brasília. But dropped out in late 2019 to focus on my career.',
  },
  {
    year: '2018',
    description: (
      <>
        Started to work professionally at{' '}
        <Link
          href="https://coopersystem.com.br/"
          target="blank"
          rel="noopener norefferer"
        >
          Coopersystem
        </Link>{' '}
        as a Frontend Engineer.
      </>
    ),
  },
  {
    year: '2020',
    description: (
      <>
        Joined the{' '}
        <Link
          href="https://novatics.com.br/"
          target="blank"
          rel="noopener norefferer"
        >
          Novatics
        </Link>{' '}
        team to work on{' '}
        <Link
          href="https://appen.com/"
          target="blank"
          rel="noopener norefferer"
        >
          Appen
        </Link>
        &apos;s projects as Software Engineer focused on frontend. Besides that,
        came back to college to graduate in Systems Development. <br />
        Also, started a YouTube channel to help begginers to find their way in
        the tech world.
      </>
    ),
  },
  {
    year: '2021-now',
    description: (
      <>
        I&apos;ve been working as a Frontend Engineer at{' '}
        <Link
          href="https://cornershopapp.com/"
          target="blank"
          rel="noopener norefferer"
        >
          Cornershop by Uber
        </Link>
        &nbsp;leading the frontend development of a backoffice application made
        with <b>React</b>.
      </>
    ),
  },
];

const Home: React.FC = () => (
  <div>
    <Container>
      <Box display={{ md: 'flex' }} alignItems={{ md: 'center' }} my="12">
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          mr={{ md: 6 }}
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
            borderRadius="full"
            src="/me.jpg"
            alt="Profile image"
          />
        </Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fabs
          </Heading>
          <p>Software Engineer ( JavaScript / React / Node.JS / Design )</p>
        </Box>
      </Box>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Hello!
        </Heading>
        <p>This is my fancy intro.</p>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          My journey
        </Heading>

        {timeline.map((item) => (
          <BioSection>
            <BioYear>{item.year}</BioYear>
            {item.description}
          </BioSection>
        ))}
      </Section>

      <Section delay="0.3">
        <Heading as="h3" variant="section-title">
          Reach me!
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/fabmont" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @fabmont
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/fabmont" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Fabrício Monteiro
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/fab_mont" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @fab_mont
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.youtube.com/channel/UCiJHIHP-suKBwZnJRJ47fwA"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                Fabrício Monteiro
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </div>
);

export default Home;
