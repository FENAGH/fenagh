import React from 'react'
import { Box } from '@chakra-ui/react'

const Border = () => (
  <Box 
    w="100%"
    mb="85px"
    mt="-38px"
    zIndex="3"
    pos="relative"
  >
    <Box 
      w="100%"
      h="38px"
      bg={`url(${require('../images/cap@2x.png')}) repeat-x 50% 100%`}
      bgSize="1969px 38px"
      bgPosition="1183px"
      transform="scaleX(-1)"
    />
  </Box>
)

export default Border