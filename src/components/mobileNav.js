import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Flex, PseudoBox } from '@chakra-ui/core'
import { MdKeyboardArrowDown } from 'react-icons/md'

const MobileNavLink = ({link, value, subMenu}) => {
  const [ showSubLink, setShowSubLink ] = useState(false)
  const handleOnClick = () => setShowSubLink(!showSubLink)
  return subMenu ? (
    <PseudoBox
      onClick={handleOnClick}
      backgroundColor="#fff"
      cursor="pointer"
      color={showSubLink ? "#3A8537" : "#1A202C"}
      fontSize="14px"
      fontWeight="bold"
      textTransform="uppercase"
      pt="20px"
      pos="relative"
      _first={{
        paddingTop: 0
      }}
    >
      <Flex 
        w="100%" 
        align="center" 
        justify="space-between"
        borderBottom="1px solid #d5dade"
        pb="20px"
      >
        <Box as="span">{value}</Box>
        <Box 
          as={MdKeyboardArrowDown} 
          fontSize="1.2rem" 
          mr="5px"
          transform={showSubLink && "rotate(180deg)"}
          transition="transform .3s ease"
        />
      </Flex>
      <AnimatePresence exitBeforeEnter>
        {showSubLink && subMenu && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <Flex flexDir="column" backgroundColor="#f6f8f9">
          {subMenu.map(menu => (
            <Box
              as={Link}
              key={menu.name}
              to={menu.link}
              p="1rem"
              pl="1.4rem"
              color="#1A202C"
            >
              {menu.name}
            </Box>
          ))}
          </Flex>
        </motion.div>
      )}
      </AnimatePresence>
    </PseudoBox>
  ) : (
    <PseudoBox
      as={Link}
      to={link}
      backgroundColor="#fff"
      color="#1A202C"
      fontSize="14px"
      fontWeight="bold"
      textTransform="uppercase"
      borderBottom="1px solid #d5dade"
      py="20px"
      _last={{
        borderBottom: "0px transparent"
      }}
    >
      {value}
    </PseudoBox>
  )
}

const MobileNav = ({show}) => {
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
          display={{base: show ? "flex" : "none", md:"none"}}
          flexDir="column"
          px="1rem"
          pt="2rem"
          w="100%"
          h="calc(100vh - 52px)"
          overflow="hidden"
          pos="absolute"
          top="52px"
          left="0"
          bottom="0"
        >
        {data.site.siteMetadata.menuLinks.map((menuLink, index) => (
          <MobileNavLink 
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

export default MobileNav;