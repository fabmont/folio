import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Heading,
  Image,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import path from 'path';

import Section from '../../components/Section';
import { contentReadingTimeCalculation } from '../../utils/contentReadingTimeCalculation';
import PostBody from './[slug].styles';

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
    frontmatter: { title, coverImage, author, date, subtitle, slug },
    content,
  } = props;

  return (
    <Container maxW="full">
      <Head>
        <title>{title} - Fabrício Monteiro</title>
        <meta name="title" content={`${title} - Fabrício Monteiro`} />
        <meta name="description" content={subtitle} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://fabmont.vercel.app/blog/${slug}`}
        />
        <meta property="og:title" content={`${title} - Fabrício Monteiro`} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content={coverImage} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://fabmont.vercel.app/blog/${slug}`}
        />
        <meta
          property="twitter:title"
          content={`${title} - Fabrício Monteiro`}
        />
        <meta property="twitter:description" content={subtitle} />
        <meta property="twitter:image" content={coverImage} />
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
          <Image
            src={coverImage}
            width="full"
            height="52"
            objectFit="cover"
            borderRadius="md"
          />
          <Heading fontSize="3xl" mt="4">
            {title}
          </Heading>

          <Text opacity={0.6} my="2">
            {author}
            <br />
            <Text as="span" fontSize="xs">
              Posted on {date}
            </Text>
            &nbsp;•&nbsp;
            <Text as="span" fontSize="xs">
              {contentReadingTimeCalculation(content)} min read
            </Text>
          </Text>

          <Text>{subtitle}</Text>
        </Section>

        <Divider
          borderColor={useColorModeValue('gray.400', 'gray.600')}
          my="4"
        />

        <Section delay="0.3">
          <PostBody
            theme={theme}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </Section>
      </Box>
    </Container>
  );
};

export default BlogPost;
