import React, { useState } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, PseudoBox } from '@chakra-ui/core';
import styled from "@emotion/styled";
import { MdKeyboardArrowDown } from 'react-icons/md'
// Hook
import useWindowSize from '../../hooks/useWindowSize';

const SubmenuItem = styled(motion.div)`
  background-color: #fff;
  border-top: 2px solid #3A8537;
  box-shadow: 0 0 6px 0 rgba(23,43,64,.1);
  cursor: default;
  padding: 30px;
  position: absolute;
  color:#1A202C;
  left: 0;
  top: 58px;
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 200px;
    li{
      display: flex;
      cursor: pointer;
      margin-left: 0;
      margin-top: 20px;
      &:first-of-type{
        margin-top: 0;
      }
      &:hover a{
        color: #3A8537;
      }
    }
  }
`

const MenuItem = ({link, value, subMenu}) => {
  const [ isHovered, setIsHovered ] = useState(false)
  const { width } = useWindowSize()

  const handleMouseEnter = () => {
    if(width < 768){
      return null
    }else{
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if(width < 768){
      return null
    }else{
      setIsHovered(false)
    }
  }
  return (
    <PseudoBox
      role="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      as={subMenu ? "div" : Link}
      to={link}
      color="#1A202C"
      fontSize="14px"
      fontWeight="bold"
      textTransform="uppercase"
      mr="1.2rem"
      h="60px"
      display="flex"
      alignItems="center"
      justifyContent={{base: "space-between"}}
      pos="relative"
      cursor="pointer"
      _hover={{
        color: "#3A8537"
      }}
    >
      <Box as="span" mr="5px">{value}</Box>
      { subMenu && (
        <PseudoBox 
          as={MdKeyboardArrowDown}
          fontSize="1rem"
          transition="transform .3s ease"
          _groupHover={{
            transform: "rotate(180deg)",
            transformOrigin: "center"
          }}
        />
      )}
      <AnimatePresence exitBeforeEnter>
        {isHovered && subMenu && (
        <SubmenuItem
          initial={{ y: 10, opacity: 0 }}
          exit={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: .2, ease: "easeInOut"}}
        >
          <ul>
            {subMenu.map(menu => (
              <li key={menu.name}>
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </SubmenuItem>
      )}
      </AnimatePresence>
    </PseudoBox>
  )
}

export default MenuItem;

