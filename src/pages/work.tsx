import Head from 'next/head';
import NextLink from 'next/link';
import {
  Box,
  Image,
  Text,
  Heading,
  Container,
  SimpleGrid,
  GridItem,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import { firestore } from '../config/firebase';
import Section from '../components/Section';

interface FirebaseDataTypes {
  title: string;
  description: string;
  technologies: string[];
  thumbUrl: string;
  year: string;
  id: string;
  url: string;
}

const Img = styled(Image)`
  width: 100%;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps() {
  const projects = (
    await firestore.collection('projects').get()
  ).docs.map((i) => ({ ...i.data(), id: i.id }));

  return { props: { data: projects } };
}

const Work: React.FC<{ data: FirebaseDataTypes[] }> = ({ data }) => (
  <Container>
    <Section>
      <Head>
        <title>Fabrício Monteiro - Work</title>
      </Head>

      <Box textAlign="center">
        <Img
          src="/cover.jpg"
          alt="first hackathon i've participated"
          borderRadius="2xl"
          mt="8"
          mb="2"
          h={[200, 230]}
          objectFit="cover"
          objectPosition="center"
        />
        <Text fontSize="sm" color="GrayText">
          Me and my teammates on the first hackathon that I participated
        </Text>
      </Box>
    </Section>
    <Section delay="0.1">
      <Heading variant="section-title" mt="8">
        Projects
      </Heading>
      <SimpleGrid columns={2} spacing={10} minChildWidth="200px">
        {data.map((item) => (
          <GridItem minW="200px" key={item.id}>
            <NextLink href={`/works/${item.url}`}>
              <LinkBox cursor="pointer" textAlign="center">
                <Image
                  src={item.thumbUrl}
                  alt={item.title}
                  className="grid-item-thumbnail"
                  placeholder="blur"
                  borderRadius="8"
                  h="180px"
                  w="100%"
                  objectPosition="center"
                  objectFit="cover"
                />
                <LinkOverlay href={`/works/${item.id}`}>
                  <Text mt={2} fontSize={20}>
                    {item.title}
                  </Text>
                  <Text mt={2} fontSize={14}>
                    {item.description}
                  </Text>
                </LinkOverlay>
              </LinkBox>
            </NextLink>
          </GridItem>
        ))}
      </SimpleGrid>
    </Section>
  </Container>
);

export default Work;
