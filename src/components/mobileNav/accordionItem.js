import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { Box, Icon } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const AccordionItem = ({expanded, setExpanded, subMenu, value}) => {
  return(
    <>
      <Box 
        onClick={() => setExpanded(!expanded)}
				as="button"
				outline="0"
				userSelect="none"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
				py="8px"
				px={{base: "15px", md: "30px"}}
			>
				<Box 
					as="span"
					textTransform="uppercase"
					fontSize="18px"
					lineHeight="28px"
					fontWeight="bold"
				>{value}</Box>
				<Icon 
					transform="rotate(0deg)"
					w="24px"
					h="24px"
					m="auto -5px auto auto"
					pb="1px"
					color="#a5a5a5"
					transition="transform .408s ease-in-out"
					as={MdKeyboardArrowDown} 
				/>
			</Box>
      <motion.div
        key='content' 
        animate={{height: expanded ? '100%' : '1px'}}
        transition={{ ease: "easeOut", duration: .408 }}
      >
        <Box
          pos="relative"
          overflow="hidden"
          h='100%'
          _after={{
            content: "''",
            display: "block",
            pointerEvents: "none",
            position: "absolute",
            bottom: 0,
            left: "15px",
            width: "calc(100% - 30px)",
            borderBottom: "1px solid #e1e1e1",
          }}
        >
        {subMenu.map((menu, i) => (
          <Box 
            as="ul"
            key={i}
          >
            <Box 
              as="span" 
              p="9px 35px"
              display="block"
              pos="relative"
              _before={{
                content: `"${i + 1}."`,
                pos:"absolute",
                left: "15px",
              }}
            >
              {menu.flayOutName}
            </Box>
            {menu.flayOutMenu.map((item, i) => (
              <Box 
                key={i} 
                as="li" 
                listStyleType="none"
              >
                <Box 
                  as={Link} 
                  to={item.flayOutMenu_link}
                  display="block"
                  color="#777777"
                  p="9px 35px"
                  font-Sze="14px"
                  lineHeight="20px"
                  pos="relative"
                  _after={{
                    content: "''",
                    display: "block",
                    pointerEvents: "none",
                    position: "absolute",
                    bottom: 0,
                    left: "15px",
                    width: "calc(100% - 30px)",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  {item.flayOutMenu_name}
                </Box>
              </Box>
            ))}
          </Box>
        ))}
        </Box>
      </motion.div>
    </>
  )
}

export default AccordionItem