import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';

const workList = [
  {
    url: 'https://coopersystem.com.br',
    title: 'Coopersystem',
    description: (
      <>
        <Paragraph>
          Coopersystem was the place were I definitely started my career as a
          software engineer. I had the pleasure to work with talented people who
          taught me a lot of things both technical and soft skills.
        </Paragraph>
        <Paragraph>
          I could work on more than 5 projects using React / React Native for a
          bunch of Coopersystem&apos;s clients. So all these experiences helped
          me improving my knowledge with the JS/React stack.
        </Paragraph>
        <Paragraph>
          Also, I could test, implement and purpose new architectures on top of
          React to apply on several projects. Tutoring junior developers of my
          squads was also a role I had.
        </Paragraph>
      </>
    ),
    role: 'Software Engineer, Frontend & Mobile',
    date: 'Oct 2018 - Jul 2020',
    technologies: ['JavaScript', 'ReactJS', 'React Native'],
  },
  {
    url: 'https://appen.com',
    title: 'Appen',
    description: (
      <>
        <Paragraph>
          I worked for Appen as a frontend engineer outsourced by{' '}
          <Link
            href="https://novatics.com.br"
            target="blank"
            rel="noopener noreferrer"
          >
            Novatics
          </Link>
          .
        </Paragraph>
        <Paragraph>
          At Appen I could work with a bunch of talented people and work on
          awesome projects, such as the new platform onboarding experience,
          which improved the user experience during signing up Appen&apos;s
          system, and a React component library that applied the Appen&apos;s
          design system that helped the engineers write less code having
          reusable components.
        </Paragraph>
      </>
    ),
    role: 'Software Engineer, Frontend',
    date: 'Jul 2020 - Apr 2021',
    technologies: [
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'Redux/Sagas',
      'Storybook',
      'Monorepo',
    ],
  },
  {
    url: 'https://cornershopapp.com',
    title: 'Cornershop by Uber',
    description: (
      <>
        <Paragraph>
          I’ve worked as a frontend software engineer at Cornershop using the
          React ecosystem with JavaScript and TypeScript, helping lots of squads
          inside the company. Some of my contributions there was:
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Worked at the Inventory team and helped building the campaigns and
            sample products app from scratch to production.
          </ListItem>
          <ListItem>
            Contributed developing and maintaining the Shopper support platform
            inside the Quality team.
          </ListItem>
          <ListItem>
            Helped developing new features for the Shopper Center platform,
            which is the main app Shoppers use to manage their journey inside
            Cornershop.
          </ListItem>
          <ListItem>
            Helped reviewing PRs from different squads and contributed writing
            and doing talks for the frontend team.
          </ListItem>
        </UnorderedList>
      </>
    ),
    role: 'Software Engineer, Frontend',
    date: 'Apr 2021 - May 2022',
    technologies: ['JavaScript', 'TypeScript', 'ReactJS', 'Storybook'],
  },
  {
    url: 'https://draft.co',
    title: 'Draft',
    description: (
      <>
        <Paragraph>
          Working at the Growth team as a software engineer using NodeJS, VueJS
          and SequelizeORM.
        </Paragraph>
      </>
    ),
    role: 'Software Engineer, Full Stack',
    date: 'May 2022 - Nov 2022',
    technologies: [
      'JavaScript',
      'VueJS',
      'NodeJS',
      'SequelizeORM',
      'Storybook',
    ],
  },
  {
    url: 'https://flieber.com',
    title: 'Flieber, Inc',
    description: (
      <>
        <Paragraph>
          Working at the frontend team to implement new features for the app, fix bugs and maintain our codebase.
        </Paragraph>
      </>
    ),
    role: 'Software Engineer, Frontend',
    date: 'Feb 2023 - now',
    technologies: [
      'TypeScript',
      'ReactJS',
      'Jest + React Testing Library',
      'Storybook',
    ],
  },
];

export default workList.reverse();
