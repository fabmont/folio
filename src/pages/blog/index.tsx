import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
  <Container>
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
              p="1"
              bgGradient="linear(to-r, blue.200, teal.400)"
              borderRadius="lg"
              cursor="pointer"
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
      </Section>
    </Box>
  </Container>
);

export default Blog;
