/* eslint-disable react/no-array-index-key */
import { Box, Container, Heading, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';

import Section from '../components/Section';
import workList from '../constants/workList';

const Work: React.FC = () => (
  <Container maxW="full">
    <Head>
      <title>Fabrício Monteiro - Work</title>
    </Head>

    <Section delay="0.2">
      <Heading variant="section-title" mb="8" mt="8" fontSize="3xl">
        Career
      </Heading>
      {workList.map((item) => (
        <Box my="8" key={item.title}>
          <Text opacity={0.6} fontSize="lg">
            {item.role}
          </Text>
          <Text>
            <Link href={item.url} target="blank" rel="noopener noreferrer">
              <Text as="span" fontWeight="bold">
                {item.title}
              </Text>
            </Link>{' '}
            • {item.date}
          </Text>
        </Box>
      ))}
    </Section>
  </Container>
);

export default Work;
