import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import {
  githubUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl,
  youtubeUrl,
} from '../../constants/social-networks';
import NowPlaying from '../NowPlaying';

const Footer: React.FC = () => (
  <>
    <Divider borderColor={useColorModeValue('gray.400', 'gray.600')} mt="14" />
    <Box w="100%" px={['4', '16']} pt="4" pb="64px">
      <NowPlaying />
      <SimpleGrid
        justifyContent="flex-start"
        textAlign="left"
        spacing="4"
        columns={2}
      >
        <List spacing="4">
          <Text opacity={0.4}>Site</Text>
          <ListItem>
            <Link
              as={NextLink}
              href="/"
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={NextLink}
              href="/work"
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
            >
              Work
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={NextLink}
              href="/blog"
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
            >
              Blog
            </Link>
          </ListItem>
        </List>

        <List spacing="4">
          <Text opacity={0.4}>Social</Text>
          <ListItem>
            <Link
              href={githubUrl}
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
              isExternal
            >
              GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={linkedinUrl}
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
              isExternal
            >
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={instagramUrl}
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
              isExternal
            >
              Instagram
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={youtubeUrl}
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
              isExternal
            >
              YouTube
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={twitterUrl}
              fontWeight="bold"
              color={useColorModeValue('#424242', '#fdfdfd')}
              isExternal
            >
              Twitter
            </Link>
          </ListItem>
        </List>
      </SimpleGrid>
      <Text w="100%" mt="12" opacity={0.2} textAlign="center">
        fabmont &copy; {new Date().getFullYear()}. All Rights Reserved.
      </Text>
    </Box>
  </>
);

export default Footer;
