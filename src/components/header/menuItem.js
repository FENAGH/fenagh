import React, { useState } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import styled from "@emotion/styled";
import { MdKeyboardArrowDown } from 'react-icons/md'
// Hook
import useWindowSize from '../../hooks/useWindowSize';

const FlayOutNav = styled.nav`
  color:#1A202C;
  transform: translateX(-3rem);
  display:flex;
  flex-wrap:nowrap;
  text-transform: none;
`

const FlayOutPanel = styled.div`
  background-color:#fff;
  flex: 0 0 auto;
  min-height: auto;
  min-width: 0px;
  align-self: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  &:first-child{
    padding-left: 1.5rem;
  }
  &:last-child{
    padding-right: 1.5rem;
  }
  &:first-child .flayout-panel-section__container{
    margin-left: 0px;
    border: medium none !important;
    padding-top: 0px;
    padding-left: 0px;
  }
  &:not(:first-child){
    .flayout-panel-section__container{
      margin-left: 1rem;
      padding-left: 2rem;
      position: relative;
      &:before{
        content: "";
        background-color: rgb(224, 224, 224);
        position: absolute;
        width: 1px;
        left: 0px;
        top: 0px;
        bottom: 0px;  
      }
    }
  } 
  .flayout-panel-section__container{
    .flayout-panel-title{
      display: inline-block;
      color: #777777;
      font-family: 'Libre Baskerville', serif;
      font-size: 14px;
      letter-spacing: -.2px;
      font-weight: bold;
      padding: .5rem 0.625rem;
      margin-bottom: 2px;
      transform:translateX(-10px);
    }
    > ul {
      margin: 0;
      padding: 0;
      list-style-type:none;
      .flayout-li{
        a{
          font-size: 1.1rem;
          letter-spacing: 1px;
          color: #000;
          display: block;
          padding: 6px 10px;
          margin-bottom: 2px;
          transform:translateX(-10px);
          &:hover{
            color: #15640f;
            text-decoration: underline;
          }
        }
      }
    }
  }
`

const FlayOut = ({subMenu}) => (
  <FlayOutNav>
  {subMenu.map(menu => (
    <FlayOutPanel key={menu.flayOutName}>
      <div className="flayout-panel-section__container">
        <span className="flayout-panel-title">{menu.flayOutName}</span>
        <ul>
          {menu.flayOutMenu.map(({flayOutMenu_name, flayOutMenu_link }) => {
            return (
            <li
              key={flayOutMenu_name}
              className="flayout-li"
            >
              <Link to={flayOutMenu_link}>{flayOutMenu_name}</Link>
            </li>
          )})}
        </ul>
      </div>
    </FlayOutPanel>
  ))}
  </FlayOutNav>
)

const MenuItem = ({link, value, subMenu, scrolling}) => {
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
    <>
      <Box
        role="group"
        className="nav-link-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        as={subMenu ? "div" : Link}
        to={link}
        color={scrolling ? "#000" : "#fff"}
        fontFamily="Bebas Neue, sans-serif"
        fontSize="1.2rem"
        letterSpacing="1.2px"
        px=".8rem"
        h="60px"
        display="flex"
        alignItems="center"
        justifyContent={{base: "space-between"}}
        pos="relative"
        transition="color .3s ease"
        _hover={{
          color: "#15640f"
        }}
        _last={ !subMenu && {
          pr: 0,
        }}
      >
        <Box as="span" mr="5px">{value}</Box>
        { subMenu && (
          <Box 
            as={MdKeyboardArrowDown}
            fontSize="1rem"
            mt=".5px"
            transition="transform .3s ease"
            _groupHover={{
              transform: "rotate(180deg)",
              transformOrigin: "center"
            }}
          />
        )}
        <AnimatePresence exitBeforeEnter>
          {isHovered && subMenu && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            exit={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: .4, ease: [.6, .05, -.01, 0.9] }}
            style={{
              position:"absolute",
              left:"0",
              top:"60px",
              zIndex: "20",
            }}
          >
            <FlayOut subMenu={subMenu}/>
          </motion.div>
        )}
        </AnimatePresence>
      </Box>
    </>
  )
}

export default MenuItem;

