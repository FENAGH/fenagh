import React from 'react'
import { Box } from '@chakra-ui/react'

const Border = ({bottom, top}) => (
  <Box 
    display="block"
    zIndex="10"
    pos="relative"
    style={bottom ? {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
    } : top ? {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      transform:"scaleY(-1)"
    } : {
      marginBottom: "80px",
      marginTop: "-38px"
    }}
  >
    <Box 
      display="block"
      w="100%"
      h="38px"
      bg={`url(${require('../images/cap@2x.png')}) repeat-x 50% 100%`}
      bgSize="1969px 38px"
      style={{
        backgroundPositionX:"1183px",
        transform:"scaleX(-1)"
      }}
    />
  </Box>
)

export default Border