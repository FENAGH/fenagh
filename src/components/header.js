import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Box, PseudoBox } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from 'framer-motion'
import { MdKeyboardArrowDown } from 'react-icons/md'
// Components
import { Container, FlexContainer } from './globals'
import Logo from './logo'

const StyledItem = styled(motion.div)`
  background-color: #fff;
  border-top: 1px solid #3A8537;
  box-shadow: 0 0 6px 0 rgba(23,43,64,.1);
  cursor: default;
  padding: 30px;
  position: absolute;

  left: 0;
  top: 70px;

  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 200px;
    li{
      display: flex;
      cursor: pointer;
      margin-left: 0;
      margin-top: 24px;

      background: red;
      &:first-of-type{
        margin-top: 0;
      }
    }
  }
`

const MenuItems = ({link, value}) => {

  const [ isHovered, setIsHovered ] = useState(false)

  return (
    <PseudoBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      as={Link}
      to={link}
      color="#3A8537"
      fontSize="14px"
      fontWeight="bold"
      textTransform="uppercase"
      mr="1.2rem"
      h="70px"
      display="flex"
      alignItems="center"
      pos="relative"
      _hover={{
        color: "#1A202C"
      }}
    >
      <Box as="span" mr="5px">{value}</Box>
      <Box as={MdKeyboardArrowDown} />
      <AnimatePresence exitBeforeEnter>
        {isHovered && (
        <StyledItem
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .2, 
            ease: "easeInOut"
          }}
        >
          <ul>
            <li><Link to="/">Link 1</Link></li>
            <li><Link to="/">Link 2</Link></li>
            <li><Link to="/">Link 3</Link></li>
            <li><Link to="/">Link 4</Link></li>
          </ul>
        </StyledItem>
      )}
      </AnimatePresence>
    </PseudoBox>
  )
}



const Menu = ({show}) => {
  return(
    <StaticQuery
      query={graphql`
        query NavigationLinks { 
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={ data => (
        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          as="nav"
          listStyleType="none"
        >
        {data.site.siteMetadata.menuLinks.map((menuLink, index) => (
          <MenuItems key={index} link={menuLink.link} value={menuLink.name}/>
        ))}
        </Box>
      )}
    />
  )
}

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box 
      as="header" 
      backgroundColor="#fafafa"
      pos="fixed"
      top="0"
      left="0"
      zIndex="1000"
      w="100%"
    >
      <Container>
        <FlexContainer spaceBetween>
          <Box display="flex" alignItems="center">
            <Box 
              as={Link}
              to="/"
              pr={{base: "0", md:"5"}}
              mr={{base: "0", md:"5"}}
              borderRight={{sm: "0px", md: "1px"}}
              borderRightColor={{sm:"transparent", md:"#d5dade"}}
            >
              <Logo />
            </Box>
            <Menu show={show}/>
          </Box>
          <Box 
            display={{ sm: "block", md: "none" }} 
            backgroundColor="#3A8537"
            cursor="pointer"
            p=".7rem 1rem"
            mr="-1rem"
            onClick={handleToggle}
          >
            <svg
              fill="#fff"
              width="30px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box>
          <Box 
            as={Link}
            to="/"
            display={{base: "none", md: "inline-block"}}
            backgroundColor="#3A8537"
            color="white"
            fontSize="14px"
            fontWeight="bold"
            h="70px"
            px="1.2rem"
            lineHeight="70px"
          >
            CONVENCIÓN 2020
          </Box>
        </FlexContainer>
      </Container>
    </Box>
  )
}

export default Header