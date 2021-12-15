import Head from 'next/head';
import NextLink from 'next/link';
import {
  Box,
  Text,
  Heading,
  Container,
  SimpleGrid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Image,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import Section from '../components/Section';
import workList from '../constants/workList';

const Img = styled(Image)`
  width: 100%;
`;

const Work: React.FC = () => (
  <Container>
    <Section>
      <Head>
        <title>Fabrício Monteiro - Work</title>
      </Head>

      <Box textAlign="center">
        <Image
          src="/cover.jpg"
          alt="first hackathon i've participated"
          borderRadius="2xl"
          mt="8"
          mb="2"
          w="100%"
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
        {workList.map((item) => (
          <GridItem minW="200px" key={item.url}>
            <NextLink href={item.url}>
              <LinkBox cursor="pointer" textAlign="center">
                <Img
                  src={item.imgUrl}
                  alt={item.title}
                  className="grid-item-thumbnail"
                  placeholder="blur"
                  borderRadius="8"
                  h="180px"
                  w="100%"
                  objectPosition="center"
                  objectFit="cover"
                />
                <LinkOverlay href={item.url}>
                  <Text mt={2} fontSize={20}>
                    {item.title}
                  </Text>
                  <Text fontSize={14}>{item.description}</Text>
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
