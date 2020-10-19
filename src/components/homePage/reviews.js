import React from 'react';
import { Box, Image } from '@chakra-ui/core';
// Components
import { Container } from '../globals'

const Reviews = () => {
  return (
    <Container 
      fluid
      mt="-50px"
    >
      <Box w="100%" mb="-1px">
        <Image
          alt="FENAGH campo de vacas" 
          src={require('../../images/edges-bg.png')} 
          w="100%"
        />
      </Box>
      <Box w="100%">
        <Image
          alt="FENAGH campo de vacas" 
          src={require('../../images/cows.png')} 
          w="100%"
        />
      </Box>
    </Container>
  );
};

export default Reviews;   