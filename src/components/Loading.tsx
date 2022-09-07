import React from 'react';
import { Heading } from '@chakra-ui/react';
import NavBar from '../components/NavBar';

const Loading = () => {
  return (
    <>
      <NavBar />
      <Heading
        as="h2"
        marginTop="5"
        ml={5}
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
      >
        Loading ... 
      </Heading>
    </>
  );
};

export default Loading;
