import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Flex, PseudoBox } from '@chakra-ui/core'
import { MdKeyboardArrowDown, MdExitToApp } from 'react-icons/md'

const MobileAccordion = ({i, link, value, subMenu, expanded, setExpanded}) => {
  const isOpen = i === expanded
  const handleOnClick = () => setExpanded(isOpen ? false : i)
  return (
    <>
      <PseudoBox
        onClick={handleOnClick}
        backgroundColor="#fff"
        color={isOpen ? "#3A8537" : "#1A202C"}
        fontSize="14px"
        fontWeight="bold"
        textTransform="uppercase"
        borderBottom="1px solid #d5dade"
        pt="20px"
        cursor="pointer"
        _first={{
          paddingTop: 0
        }}
      >
        <Flex 
          w="100%" 
          align="center" 
          justify="space-between"
          pb="20px"
        >
          <Box as="span">{value}</Box>
          <Box 
            as={MdKeyboardArrowDown} 
            fontSize="1.2rem" 
            mr="5px"
            transform={isOpen && "rotate(180deg)"}
            transition="transform .3s ease"
          />
        </Flex>
      </PseudoBox>
      <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fafafa",
          }}
        >
          {subMenu.map(({name, link}) => (
            <Box
              as={Link}
              key={name}
              to={link}
              py=".8rem"
              pl="1.5rem"
            >
              {name}
            </Box>
          ))}
        </motion.section>
      )}
      </AnimatePresence>
    </>
  )
}


const MobileNav = ({showNav}) => {
  const [ expanded, setExpanded ] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query MobileNavLinks { 
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
          as="nav"
          backgroundColor="#fff"
          borderTop="2px solid #3a8537"
          display={{base: showNav ? "flex" : "none", lg:"none"}}
          flexDir="column"
          px={{base: "1rem", md: "2rem"}}
          pt="2rem"
          w="100%"
          h="calc(100vh - 52px)"
          overflow="hidden"
          pos="absolute"
          top="52px"
          left="0"
          bottom="0"
        >
        {data.site.siteMetadata.menuLinks.map((menuLink, index) => {
          if(!menuLink.subMenu) return (
            <PseudoBox
              key={menuLink.name}
              as={Link}
              to={menuLink.link}
              backgroundColor="#fff"
              color="#1A202C"
              fontSize="14px"
              fontWeight="bold"
              textTransform="uppercase"
              borderBottom="1px solid #d5dade"
              py="20px"
              _last={{
                borderBottom:"0px solid transparent !important"
              }}
            >
              {menuLink.name}
            </PseudoBox>
          )
          return (
            <MobileAccordion 
              key={index}
              i={index}
              link={menuLink.link} 
              value={menuLink.name}
              subMenu={menuLink.subMenu}
              expanded={expanded} 
              setExpanded={setExpanded}
            />
          )
        })}
        <Box 
          as="a"
          href="#"
          backgroundColor="#fff"
          color="#1A202C"
          fontSize="14px"
          fontWeight="bold"
          textTransform="uppercase"
          py="20px"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box as="span">Registro Genealógico</Box>
          <Box as={MdExitToApp} fontSize="1.2rem" mr="5px" />
        </Box>
        </Box>
      )}  
    />
  )
}

export default MobileNav;