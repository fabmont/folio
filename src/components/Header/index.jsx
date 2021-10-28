import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  IconButton,
  MenuButton,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';
import ThemeToggleButton from '../ThemeToggleButton';

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" letterSpacing="tighter">
            <Link href="/">
              <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                <span role="img" aria-label="hi">
                  👋🏼&nbsp;&nbsp;
                </span>
                Fabrício Monteiro
              </Text>
            </Link>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
          <LinkItem
            href="/posts"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            <IoLogoGithub /> GitHub
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={4} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon fontSize={24} />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Work</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;