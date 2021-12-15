import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Head from 'next/head';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';

const work: React.FC = () => (
  <Container>
    <Head>
      <title>Fabrício Monteiro - Cornershop by Uber</title>
    </Head>
    <Box my="8">
      <Section>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/work">Work</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/work/cornershop-by-uber">
              Cornershop by Uber{' '}
              <Badge bgColor={useColorModeValue('yellow.300', 'yellow.600')}>
                2021-now
              </Badge>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box mt="4">
          <Heading as="h3" variant="section-title">
            My responsabilities
          </Heading>
          <Paragraph>
            I worked as a frontend engineer and owning the Inventory team&apos;s
            frontend back-office application. The Inventory team in Cornershop
            has the goal to manage and maintain all assets that shoppers needs
            to do their work (t-shirts, bags, sample products and so on).
          </Paragraph>
        </Box>
      </Section>

      <Section>
        <List my={4}>
          <ListItem>
            <Badge bgColor="blue.500" color="white" mr="2">
              Website:
            </Badge>
            <Link href="https://www.cornershopapp.com/" target="_blank">
              https://www.cornershopapp.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my="2">
            <Badge bgColor="blue.500" color="white" mr="2">
              Platform:
            </Badge>
            Web
          </ListItem>
          <ListItem>
            <Badge bgColor="blue.500" color="white" mr="2">
              Stack:
            </Badge>
            ReactJS, React-Query, Styled Components
          </ListItem>
        </List>
      </Section>
    </Box>
  </Container>
);

export default work;
