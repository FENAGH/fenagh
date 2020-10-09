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
  border-top: 2px solid #3A8537;
  box-shadow: 0 0 6px 0 rgba(23,43,64,.1);
  cursor: default;
  padding: 30px;
  position: absolute;
  color:#1A202C;
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
      margin-top: 20px;
      &:first-of-type{
        margin-top: 0;
      }
      &:hover a{
        color: #3A8537;
      }
      a{
        font-weight: 500;
      }
    }
  }
`

const MenuItem = ({link, value, subMenu}) => {

  const [ isHovered, setIsHovered ] = useState(false)

  return (
    <PseudoBox
      role="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      as={subMenu ? "div" : Link}
      to={link}
      color="#1A202C"
      fontSize="14px"
      fontWeight="bold"
      textTransform="uppercase"
      mr="1.2rem"
      h="70px"
      display="flex"
      alignItems="center"
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
          transition="transform .3s ease"
          _groupHover={{
            transform: "rotate(180deg)",
            transformOrigin: "center"
          }}
        />
      )}
      <AnimatePresence exitBeforeEnter>
        {isHovered && subMenu && (
        <StyledItem
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
        </StyledItem>
      )}
      </AnimatePresence>
    </PseudoBox>
  )
}



const MenuItems = ({show}) => {
  return(
    <StaticQuery
      query={graphql`
        query NavigationLinks { 
          site {
            siteMetadata {
              menuLinks {
                name
                link
                subMenu{
                  name,
                  link
                }
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
          <MenuItem
            key={index} 
            link={menuLink.link} 
            value={menuLink.name}
            subMenu={menuLink.subMenu}
          />
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
            <MenuItems show={show}/>
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