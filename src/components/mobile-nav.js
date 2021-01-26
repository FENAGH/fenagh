import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box, Icon } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const MobileNavPanel = styled.section`
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	width:100vw;
	height: 100vh;
	pointer-events: none;
	opacity: 0;
	transition: opacity .267s ease;
	z-index:20;
	${props => props.show && css`
		opacity: 1;
		pointer-events: auto;
		transition-delay: .267s;
	`}
`

const MobileNav = ({show}) => (
	<MobileNavPanel show={show}>
		<Box
			transform="translateZ(0)"
			minWidth="calc(100vw + 30px)"
			w="100%"
			maxHeight="100%"
			h="100vh"
			pr="30px"
			overflowY="scroll"
		>
			<Box
				as="section"
				transform="translateZ(0)"
				mt="56px"
			>
				<Box 
					as="nav"
					pt="35px"
					pb="40px"
				>
					<Box
						as="section"
						pos="relative"
						padding="0"
					>
						<Box 
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
							>Item #1</Box>
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
					</Box>
				</Box>
			</Box>
		</Box>
	</MobileNavPanel>
)

export default MobileNav