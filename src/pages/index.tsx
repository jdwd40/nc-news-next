import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Image,
  Box,
  HStack,
  VStack,
  UnorderedList,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';

const Index = () => (
  <>
    <NavBar />
    <Hero />
    <VStack>
      <Text p={2}>
        Nc News is a small demonstration app that was build as part of a project
        at Northcoders.{' '}
      </Text>
      <Text p={3}>A user should be able to do the following:</Text>

      <UnorderedList>
        <ListItem>Log in as an exsiting user</ListItem>
        <ListItem>Post a Comment</ListItem>
        <ListItem>Up vote a Comment</ListItem>
        <ListItem>Up vote an Article</ListItem>
        <ListItem>Create a new user</ListItem>
      </UnorderedList>

      <Text p={2}>NC News was built with Next.js and Chackra UI. </Text>

      <Text p={2}>
        For the backend I created a small demo API with node and express.js
      </Text>
      <Image
        src="https://jdwd40.tech/wp-content/uploads/2022/08/wp1-8.jpg"
        height="300"
        width="100"
        borderRadius="10%"
      ></Image>
      <Text>Next ❤️ Chakra</Text>
      <CTA />
      <Footer />
    </VStack>
  </>
);

export default Index;
