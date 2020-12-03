import { useEffect, useState } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import {
  Card,
  CardFooter,
  CardPic,
  Container,
  TechBadge,
} from '../styles/pages/work';
import { firestore } from '../config/firebase';

interface FirebaseDataTypes {
  title: string;
  description: string;
  technologies: string[];
  thumbUrl: string;
  year: string;
  id: string;
}

const Work: React.FC = () => {
  const [data, setData] = useState<FirebaseDataTypes[]>([]);

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
    <Layout>
      <Head>
        <title>Work • fabmont</title>
      </Head>
      <Container projectLength={data.length}>
        {data.map((item) => (
          <Card key={item.id}>
            <CardPic imgSrc={item.thumbUrl} />
            <CardFooter>
              <h2>{item.title}</h2>
              <div>
                {item.technologies.map((tech) => (
                  <TechBadge>{tech}</TechBadge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

export default Work;
