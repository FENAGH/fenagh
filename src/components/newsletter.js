import React from 'react'
import { Box, Flex, IconButton, Input } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

const NewsLetter = () => (
  <Box
    pos="relative"
  >
    <Input 
      type="email" 
      placeholder="Correo electronico"
      fontSize="1.5rem"
      fontWeight="medium"
      lineHeight="32px"
      color="white !important"
      p="0 50px 0 0!important"
      w="100%"
      h="70px"
      display="flex"
      alignItems="center"
      background="transparent"
      border="none !important"
      borderBottom="1.5px solid #b9df3c !important"
      borderRadius="0 !important"
      outline="none !important"
      transition="border-bottom .2s cubic-bezier(1,0,0,1)"
      focusBorderColor="none"
    />
    <IconButton
      size="lg"
      aria-label="Registrate" 
      icon={<FaArrowRight />}
      color="brandGreen.30"
      pos="absolute"
      backgroundColor="transparent"
      border="none"
      right="0"
      top="50%"
      transform="translateY(-50%)"
      transition="right .2s cubic-bezier(1,0,0,1)"
      _hover={{
        backgroundColor: "transparent",
        right: "-5px"
      }}
      _focus={{
        boxShadow: "0 0 0 0 rgba(66, 153, 225, 0)"
      }}
      _active={{
        background: "transparent"
      }}
    />
  </Box>
)

export default NewsLetter