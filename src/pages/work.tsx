import Head from 'next/head';
import { Box, Text, Container, Image, Badge, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Section from '../components/Section';
import workList from '../constants/workList';

const Work: React.FC = () => (
  <Container>
    <Head>
      <title>Fabrício Monteiro - Work</title>
    </Head>

    <Section delay="0.1">
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
          Me and my teammates working on a project for a hackathon challenge.
        </Text>
      </Box>
    </Section>

    <Section delay="0.2">
      {workList.map((item) => (
        <Box my="8" key={item.title}>
          <Image src={item.imgUrl} height="12" width="12" rounded="lg" mb="2" />
          <Text fontSize="larger" fontWeight="bold">
            {item.title}
            <Link
              href={item.url}
              target="blank"
              rel="noopener noreferrer"
              marginLeft="2"
            >
              <ExternalLinkIcon fontSize="sm" />
            </Link>
            <Badge marginLeft="2" colorScheme="blue">
              {item.date}
            </Badge>
          </Text>
          <Text opacity={0.6} fontSize="sm">
            {item.role}
          </Text>
          <Text as="p">{item.description}</Text>
        </Box>
      ))}
    </Section>
  </Container>
);

export default Work;
