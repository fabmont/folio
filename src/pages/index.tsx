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
import timeline from '../constants/timeline';

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
