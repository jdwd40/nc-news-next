import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';

const Index = () => (
  <Container height="100vh">
    <NavBar />
    <Hero />
    <Image
      src="https://jdwd40.tech/wp-content/uploads/2022/08/wp1-8.jpg"
      height="300"
      width="100"
      borderRadius='10%'
    ></Image>
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
