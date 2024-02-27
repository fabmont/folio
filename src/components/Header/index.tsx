import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ThemeToggleButton from '../ThemeToggleButton';

const LinkItem = ({
  href,
  path,
  children,
  ...props
}: React.PropsWithChildren<{
  href: string;
  path: string;
  _target?: string;
}>) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      // bg={active ? useColorModeValue('#e2e2e2', 'gray.700') : undefined}
      color={active ? 'unset' : inactiveColor}
      borderRadius="lg"
      position="relative"
      {...props}
    >
      {children}

      {active && (
        <Flex
          position="absolute"
          w="100%"
          bottom="0"
          left="0"
          align="center"
          justify="center"
        >
          <Box
            h="3px"
            w="10px"
            borderRadius="full"
            bg={useColorModeValue('gray.600', 'gray.300')}
          />
        </Flex>
      )}
    </Link>
  );
};

const Navbar: React.FC<{ path: string }> = (props) => {
  const { path } = props;

  return (
    <Box
      position="sticky"
      top={0}
      as="nav"
      w="100%"
      bg={useColorModeValue('#e2e2e282', '#27272b80')}
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <NextLink href="/" passHref>
            <Button variant="ghost">
              <Heading as="h1" size="md" letterSpacing="tighter">
                <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                  <span role="img" aria-label="hi">
                    👋🏼&nbsp;&nbsp;
                  </span>
                  Fabrício Monteiro
                </Text>
              </Heading>
            </Button>
          </NextLink>
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
        </Stack>

        <Box display="flex" flex={1} justifyContent="right">
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
                <NextLink href="/">
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href="/work">
                  <MenuItem>Work</MenuItem>
                </NextLink>
                <NextLink href="/blog">
                  <MenuItem>Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
