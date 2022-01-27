import { Badge, Link } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';

const workList = [
  {
    url: null,
    title: 'Onde Joga?',
    description: (
      <>
        <Badge colorScheme="red">No longer active</Badge>
        <Paragraph>
          This was a project I had the pleasure to be part of during my
          graduation in Software Engineering. With this project I had my first
          contact with React Native (and after React.js).
        </Paragraph>
        <Paragraph>
          &quot;Onde Joga?&quot; or <i>&quot;Where I throw away?&quot;</i> was
          an app that allowed users to report trash on streets. With that the
          government authorities could see where they needed to put efforts to
          clean up the street trash.
        </Paragraph>
        <Paragraph>
          With this project I could study technologies such as React, React
          Native, JavaScript, Firebase, CSS and Redux.
        </Paragraph>
      </>
    ),
    imgUrl:
      'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg',
    role: 'Software Engineer, Mobile',
    date: 'March 2018 - July 2018',
  },
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
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQHOmyc1ZwZ_cg/company-logo_100_100/0/1526419523058?e=1651104000&v=beta&t=98LtBRdw8tSPbhkRVgHsUzhBK-i5dB8AMSLboRSwMj0',
    role: 'Software Engineer, Frontend & Mobile',
    date: 'October 2018 - July 2020',
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
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C560BAQHUHJih-Ly1ug/company-logo_100_100/0/1587035438283?e=1651104000&v=beta&t=KDmwr_7OX6u-uG3kiX6CEhn8IejF3bD1dyUy3eMq34Y',
    role: 'Software Engineer, Frontend',
    date: 'July 2020 - April 2021',
  },
  {
    url: 'https://cornershopapp.com',
    title: 'Cornershop by Uber',
    description: (
      <>
        <Paragraph>
          I joined the Cornershop team to work as a frontend engineer. I&apos;ve
          worked on more than 4 projects there and owning some of them, from
          MVPs to big internal tools.
        </Paragraph>
        <Paragraph>
          I was able to learn a lot about software development best practices;
          interact with other culture (most of Cornershop engineers are from
          Chile); experience owning projects; maintain libraries and tools and
          so on.
        </Paragraph>
        <Paragraph>
          I also experienced the incorporation of Cornershop inside <b>Uber</b>.
        </Paragraph>
      </>
    ),
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQHwjB0czoh0dQ/company-logo_100_100/0/1625585613746?e=1651104000&v=beta&t=OJZNMmUF6MBMgZt9p5Uw8Y1MzyAhKnDKrIlQFhnXeh8',
    role: 'Software Engineer, Frontend',
    date: 'April 2021 - today',
  },
];

export default workList.reverse();
