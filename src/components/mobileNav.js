import React from 'react';
import { Box } from '@chakra-ui/core';

const MobileNav = ({show}) => {
  return (
    <Box
      px="1rem"
      pt="2rem"
      w="100%"
      h={{md:"60px", lg: "auto"}}
      borderTop="2px solid #3a8537"
      pos="absolute"
      top="52px"
      left="0"
      bottom="0"
    >
      Testing Mobile Nav
    </Box>
  );
};

export default MobileNav;