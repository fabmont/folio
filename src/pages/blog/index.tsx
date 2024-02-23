import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import path from 'path';

import Section from '../../components/Section';

interface Posts {
  slug: string;
  author: string;
  date: string;
  title: string;
  subtitle: string;
  coverImage: string;
}

interface StaticProps {
  posts: Posts[];
}

export function getStaticProps(): GetStaticPropsResult<StaticProps> {
  const postsFiles = fs.readdirSync(path.join('posts'));

  const posts = postsFiles.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const markdownWithMetadata = fs.readFileSync(
      path.join('posts', fileName),
      'utf-8',
    );

    const {
      data: { author, title, date, subtitle, cover_image: coverImage },
    } = matter(markdownWithMetadata);

    return {
      slug,
      author,
      title,
      date,
      subtitle,
      coverImage,
    };
  });

  return {
    props: {
      posts: posts.sort(
        (prev, next) =>
          new Date(next.date).getTime() - new Date(prev.date).getTime(),
      ),
    },
  };
}

const Blog: React.FC<StaticProps> = ({ posts }) => (
  <Container maxW="full">
    <Head>
      <title>Fabrício Monteiro - Blog</title>
    </Head>

    <Box mt="8">
      <Section>
        <Heading variant="section-title" mb="8" fontSize="3xl">
          Blog
        </Heading>

        {posts.map(({ title, slug, author, date, subtitle }) => (
          <NextLink href={`/blog/${slug}`} key={slug}>
            <Box
              p="0.5"
              bgGradient="linear(to-r, blue.300, blue.400, blue.200)"
              borderRadius="lg"
              cursor="pointer"
              margin="0 0 8px 0"
            >
              <Box
                p="4"
                background={useColorModeValue('#fffff1', '#28282b')}
                borderRadius="md"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {title}
                </Text>
                <Text opacity={0.6} fontSize="sm" mb="2">
                  by {author} • {date}
                </Text>
                <Text>{subtitle}</Text>
                <Box align="end">
                  <Button colorScheme="blue" variant="link">
                    Read more
                  </Button>
                </Box>
              </Box>
            </Box>
          </NextLink>
        ))}

        {!posts.length && (
          <Text>
            No posts available. Sorry{' '}
            <span role="img" aria-label="sad emoji">
              🙁
            </span>
          </Text>
        )}
      </Section>
    </Box>
  </Container>
);

export default Blog;
