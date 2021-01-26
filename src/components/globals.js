import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex } from '@chakra-ui/react'

export const Container = ({children, fluid, ...otherProps}) => (
  <Box
    flexGrow="1"
    margin="0 auto"
    px={fluid ? "0" : {base: "15px", md: "30px"}}
    h="100%"
    w="auto"
    maxWidth={fluid ? "100%" : ["100%", "960px", "1216px", "1340px"]}
    pos="relative"
    {...otherProps}
  >
    {children}
  </Box>
)

export const FlexContainer = ({children, spaceBetween, isResponsive, ...otherProps}) => (
  <Flex
    align="center"
    pos="relative"
    justifyContent={spaceBetween ? "space-between" : "center"}
    flexDir={isResponsive ? {base: "column", md: "row"} : "row"}
    {...otherProps}
  >
    {children}
  </Flex>
)

export const ButtonLink = ({children, path, ...otherProps}) => (
  <Box
    as={Link}
    to={path}
    bg={
      otherProps.brand ? "brandGreen.50" : 
      otherProps.invert ? "brandGreen.30" : "#fff"
    }
    color={otherProps.brand ? "brandGreen.30" : "brandGreen.50"}
    fontWeight="bold"
    textTransform="uppercase"
    p="0 12px"
    h="54px"
    w={otherProps.fullWidth ? "100%" : "180px"}
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="background-color .3s ease"
    cursor="pointer"
    _hover={
      otherProps.brand ? ({
        backgroundColor: "brandGreen.70",
      }) : 
      otherProps.invert ? ({
        backgroundColor: "brandGreen.10",
      }) : ({
        backgroundColor: "gray.50",
      })
    }
  >{children}</Box>
)