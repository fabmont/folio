import { useEffect, useState } from 'react';
import Head from 'next/head';

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
    </Section>
  );
};

export default Work;
