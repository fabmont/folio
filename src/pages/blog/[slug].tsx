import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import fs from 'fs';
import path from 'path';
import { ChevronRightIcon } from '@chakra-ui/icons';
import matter from 'gray-matter';
import { marked } from 'marked';

import Section from '../../components/Section';

interface StaticPaths {
  params: { slug: string };
}

interface PostFrontmatter {
  slug: string;
  author: string;
  date: string;
  title: string;
  subtitle: string;
  coverImage: string;
}

interface BlogPostProps {
  frontmatter: PostFrontmatter;
  content: string;
}

interface StaticProps {
  frontmatter: PostFrontmatter;
  content: string;
}

export function getStaticPaths(): GetStaticPathsResult {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(
  params: StaticPaths,
): GetStaticPropsResult<StaticProps> {
  const {
    params: { slug },
  } = params;

  const markdownWithMetadata = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf-8',
  );

  const {
    data: { author, date, subtitle, title, cover_image: coverImage },
    content,
  } = matter(markdownWithMetadata);

  return {
    props: {
      frontmatter: { coverImage, author, date, slug, subtitle, title },
      content,
    },
  };
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  const {
    frontmatter: { title, coverImage, author, date, subtitle },
    content,
  } = props;

  console.log(marked(content));

  return (
    <Container>
      <Head>
        <title>{title} - Fabrício Monteiro</title>
        <meta name="description" content={subtitle} />
      </Head>

      <Box mt="8">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="blue.400" />}
          mb="4"
        >
          <BreadcrumbItem>
            <NextLink href="/">
              <BreadcrumbLink>
                <span role="img" aria-label="home">
                  🏠
                </span>
              </BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <NextLink href="/blog">
              <BreadcrumbLink>Blog</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Section>
          <Heading fontSize="3xl" mt="4" mb="2">
            {title}
          </Heading>

          <Text>{subtitle}</Text>

          <Text opacity={0.6} mt="2" mb="4">
            {author}&nbsp;&nbsp;•&nbsp;&nbsp;{date}
          </Text>

          <Image
            src={coverImage}
            width="full"
            height="52"
            objectFit="cover"
            borderRadius="md"
          />
        </Section>

        <Section delay="0.3">
          <Box dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </Section>
      </Box>
    </Container>
  );
};

export default BlogPost;
