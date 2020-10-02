import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Box, PseudoBox, Flex } from "@chakra-ui/core";
import { MdLocationOn, MdKeyboardArrowDown } from 'react-icons/md'
// Components
import { Container, FlexContainer } from './globals'
import Logo from './logo'

const MenuItems = ({link, value}) => {
  return (
    <PseudoBox
      as={Link}
      to={link}
      display="inline-block"
      color="#3A8537"
      fontSize="14px"
      fontWeight="bold"
      py="0.2rem"
      textTransform="uppercase"
      borderRight="1px"
      borderRightColor="#f0f1f3"
      _notLast={{
        pr:"1.2rem"
      }}
      _notFirst={{
        px:"1.2rem"
      }}
    >
      {value}
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
        <Container display={{ base: show ? "block" : "none", md: "block" }}>
          <Box
            as="nav"
            listStyleType="none"
            py="1rem"
          >
          {data.site.siteMetadata.menuLinks.map((menuLink, index) => (
            <MenuItems key={index} link={menuLink.link} value={menuLink.name}/>
          ))}
          </Box>
        </Container>
      )}
    />
  )
}

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box as="header" backgroundColor="#fafafa">
      <Box borderBottom="1px" borderBottomColor="#f0f1f3">
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
              <Box display={{base: "none", md: "flex"}}>
                <Box 
                  as={MdLocationOn} 
                  color="#3A8537"
                  mr="2"
                />
                <Flex
                  align="center"
                >
                  <Box
                    as="span"
                    fontSize="12px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    mr="1"
                  >
                    Tegucigalpa, Honduras
                  </Box>
                  <Box as={MdKeyboardArrowDown} />
                </Flex>
              </Box>
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
              p="1.5rem"
            >
              CONVENCIÓN 2020
            </Box>
          </FlexContainer>
        </Container>
      </Box>
      <Menu show={show}/>
    </Box>
  )
}

export default Header
