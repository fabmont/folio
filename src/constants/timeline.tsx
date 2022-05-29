import { Link } from '@chakra-ui/react';
import { ReactElement } from 'react';

export interface TimelineItemInterface {
  year: string;
  description: string | ReactElement;
}

const timeline: TimelineItemInterface[] = [
  {
    year: '1998',
    description: 'Born in Brasília, Brazil 🇧🇷',
  },
  {
    year: '2012',
    description: (
      <>
        Started to write your first lines of code with <b>C#</b> and{' '}
        <b>Visual Basic</b>. Also started a &quot;company&quot; called{' '}
        <b>Vault Computer</b> with a school friend.
      </>
    ),
  },
  {
    year: '2017',
    description:
      'Started to study Software Engineering at Universidade de Brasília. But dropped out in late 2019 to focus on his career.',
  },
  {
    year: '2018',
    description: (
      <>
        Started to work professionally as a Frontend Engineer at{' '}
        <Link href="https://coopersystem.com.br/" target="_blank">
          Coopersystem
        </Link>
        .
      </>
    ),
  },
  {
    year: '2020',
    description: (
      <>
        Joined the{' '}
        <Link
          href="https://novatics.com.br/"
          target="_blank"
          rel="noopener norefferer"
        >
          Novatics
        </Link>{' '}
        team to work on{' '}
        <Link href="https://appen.com/" target="_blank">
          Appen
        </Link>
        &apos;s projects as a Software Engineer focused on frontend. Besides
        that, came back to college to graduate in Systems Development. <br />
        Also, started a YouTube channel to help begginers to find their way in
        the tech world.
      </>
    ),
  },
  {
    year: '2021',
    description: (
      <>
        Started to work at{' '}
        <Link href="https://cornershopapp.com/" target="_blank">
          Cornershop by Uber
        </Link>{' '}
        as a frontend software engineer owning some backoffice projects made
        with <b>React</b>.
      </>
    ),
  },
  {
    year: '2022-now',
    description: (
      <>
        Joined the{' '}
        <Link href="https://contentfly.com/" target="_blank">
          Contentfly
        </Link>{' '}
        team to work focusing on the platform growth, working as a software
        engineer using <b>Node.JS</b> and <b>Vue.JS</b>
      </>
    ),
  },
];

export default timeline;
