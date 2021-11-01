import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Image, Text } from '@chakra-ui/react';
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
}

const Img = styled(Image)`
  width: 100%;
`;

const Work: React.FC = () => {
  const [, setData] = useState<FirebaseDataTypes[]>([]);

  useEffect(() => {
    firestore.collection('projects').onSnapshot((snap) => {
      const projects: FirebaseDataTypes[] = snap.docs.map((doc) => {
        const instance = doc.data();

        return {
          id: doc.id,
          title: instance.title,
          description: instance.description,
          technologies: instance.technologies,
          year: instance.year,
          thumbUrl: instance.thumbUrl,
        };
      });

      setData(projects);
    });
  }, []);

  return (
    <Section>
      <Head>
        <title>Fabrício Monteiro - Work</title>
      </Head>

      <Box textAlign="center">
        <Img
          src="/cover.jpg"
          alt="first hackathon i've participated"
          borderRadius="lg"
          my="8"
          h={[200, 300]}
          objectFit="cover"
          objectPosition="center"
        />
        <Text>
          Me and my teammates on the first hackathon I&apos;d participated
        </Text>
      </Box>
    </Section>
  );
};

export default Work;
