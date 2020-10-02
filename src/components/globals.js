import React from 'react'
import { Box, Flex } from '@chakra-ui/core'

export const Container = ({children, fluid, ...otherProps}) => (
  <Box
    flexGrow="1"
    margin="0 auto"
    p={fluid ? "0" : {base: "0 1rem", md: "0 2rem"}}
    h="100%"
    w="auto"
    maxWidth={fluid ? "100%" : ["100%", "960px", "1216px", "1244px"]}
    pos="relative"
    {...otherProps}
  >
    {children}
  </Box>
)

export const FlexContainer = ({children, spaceBetween, ...otherProps}) => (
  <Flex
    align="center"
    pos="relative"
    justifyContent={spaceBetween ? "space-between" : "center"}
    {...otherProps}
  >
    {children}
  </Flex>
)