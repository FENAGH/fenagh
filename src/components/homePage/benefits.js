import React from 'react';
import { Box, Heading, SimpleGrid, Text, PseudoBox } from '@chakra-ui/core';
// Components
import { Container, FlexContainer } from '../globals';
import HeroCanvas from './heroCanvas';

const benefits = [
  { id: 1, value: "We Use New technology"},
  { id: 2, value: "professional farmers"},
  { id: 3, value: "We’re certified company"},
  { id: 4, value: "We deliver everywhere"},
]

const Benefits = () => {
  return (
    <Container 
      fluid
      bg="#262626"
      pos="relative"
    >
      <Box 
        bgImage={`url(${require('../../images/benifits_bg.png')})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom center"
        w="100%"
        h="441px"
        opacity="0.03"
        pos="absolute"
        left="0"
        bottom="0"
      />
      <Container mb="2.5rem">
        <FlexContainer 
          isResponsive 
          mx="-15px"
          alignItems={{base: "flex-start", md: "center"}}
        >
          <Box
            flex={{md: "0 0 33.333333%"}}
            maxWidth={{md: "33.333333%"}}
            px="15px"
          >
            <Box mb={{base: "2.5rem", md: "0"}}>
              <Text
                color="#ef6123"
                fontSize="12px"
                fontWeight="bold"
                textTransform="uppercase" 
                letterSpacing="0.2em"
              >
                beneficios
              </Text>
              <Heading 
                as="h2"
                color="#fff"
                fontFamily="Bebas Neue"
                fontSize={{base: "3rem", lg: "4rem"}}
                textTransform="uppercase"
                mt="1rem"
              >
                agricultura & ganaderia
              </Heading>
            </Box>
          </Box>
          <Box
            flex={{md: "0 0 66.666667%"}}
            maxWidth={{md: "66.666667%"}}
            px="15px"
          >
            <Text
              color="#fff"
              opacity="0.8"
            >There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words which don't look even slightly believable. There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words which don't look even slightly believable.</Text>
          </Box>
        </FlexContainer>
      </Container>
      <Container>
        <SimpleGrid columns={4} spacing={10}>
          {benefits.map(({id, value}) => (
            <PseudoBox
              role="group"
              key={id}
              bg="#262626" 
              border="1px solid #353535"
              borderRadius="md"
            >
              <Box
                pos="relative"
                p="35px 40px 34px"
                borderRadius="md"
              >
                <PseudoBox
                  bg="#3a8537"
                  color="#fff"
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  lineHeight="50px"
                  textAlign="center"
                  transition=".3s background ease"
                  _groupHover={{ 
                    backgroundColor: "#ef6123" 
                  }}
                >
                  {id}
                </PseudoBox>
                <Heading 
                  as="h3"
                  color="#fff"
                  fontSize="lg"
                  fontFamily="Bebas Neue"
                  letterSpacing="1px"
                  fontWeight="normal"
                  mt="9px"
                >{value}</Heading>
              </Box>
            </PseudoBox>
          ))}
        </SimpleGrid>
      </Container>
      <HeroCanvas />
    </Container>
  );
};

export default Benefits;