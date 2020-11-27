import React from 'react'
import { Box } from '@chakra-ui/react'

const HeroCanvas = () => {
  return (
    <Box
      w="100%"
      pos="absolute"
      bottom="0"
    >
      <img src={require('../../images/canvas.png')} alt="fenagh canva" />
    </Box>
  )
}

export default HeroCanvas