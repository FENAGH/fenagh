import { Box } from '@chakra-ui/core'
import React from 'react'

export const HeroCanvas = () => {
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
