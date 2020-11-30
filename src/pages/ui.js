import React from "react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "../components/globals"
import { 
  Box, 
  Heading, 
  Text, 
  Flex, 
  Grid, 
  Stack, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"

const UIPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
      <SEO title="Interfaz" />
      <Box bg="brandBG" py="8rem">
        <Container>
          <Heading as="h1" size="2xl">Color Guide</Heading>
          <Heading 
            as="h3"
            mt="3rem"
            lineHeight="1.25"
            fontWeight="medium"
            fontSize="1.25rem"
            fontFamily="roboto"
            letterSpacing="-0.025em"
          >Black & White</Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="1.5rem" my="2rem" maxW="60rem">
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="black"
              />
              <Box>
                <Text fontWeight="bold">Black</Text>
                <Text>#000000</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="white"
              />
              <Box>
                <Text fontWeight="bold">White</Text>
                <Text>#FFFFFF</Text>
              </Box>
            </Flex>
            <Box />
            <Box />
          </Grid>
          <Heading 
            as="h3"
            mt="3rem"
            lineHeight="1.25"
            fontWeight="medium"
            fontSize="1.25rem"
            fontFamily="roboto"
            letterSpacing="-0.025em"
          >Brand Colors (Green)</Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="1.5rem" my="2rem" maxW="60rem">
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="brandGreen.70"
              />
              <Box>
                <Text fontWeight="bold">Green 70</Text>
                <Text>#09210E</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="brandGreen.50"
              />
              <Box>
                <Text fontWeight="bold">Green 50</Text>
                <Text>#15640F</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="brandGreen.30"
              />
              <Box>
                <Text fontWeight="bold">Green 30</Text>
                <Text>#B9DF3C</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="brandGreen.10"
              />
              <Box>
                <Text fontWeight="bold">Green 10</Text>
                <Text>#DCF7B7</Text>
              </Box>
            </Flex>
          </Grid>
          <Heading 
            as="h3"
            mt="3rem"
            lineHeight="1.25"
            fontWeight="medium"
            fontSize="1.25rem"
            fontFamily="roboto"
            letterSpacing="-0.025em"
          >Brand Colors (Yellow)</Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="1.5rem" my="2rem" maxW="60rem">
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="yellow.500"
              />
              <Box>
                <Text fontWeight="bold">Yellow 70</Text>
                <Text>#D69E2E</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="brandYellow"
              />
              <Box>
                <Text fontWeight="bold">Yellow 50</Text>
                <Text>#FFD653</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="yellow.200"
              />
              <Box>
                <Text fontWeight="bold">Yellow 30</Text>
                <Text>#FAF089</Text>
              </Box>
            </Flex>
            <Flex>
              <Box 
                borderRadius="0.375rem"
                w="3rem"
                h="3rem"
                mr="0.75rem"
                bg="yellow.100"
              />
              <Box>
                <Text fontWeight="bold">Yellow 10</Text>
                <Text>#FEFCBF</Text>
              </Box>
            </Flex>
          </Grid>
          
          <Heading as="h1" size="2xl" mt="4rem" mb="2rem">Text Sizes</Heading>
          <Stack spacing={3}>
            <Text fontSize="5xl">Federación Nacional de Agricultores de Honduras</Text>
            <Text fontSize="4xl">Federación Nacional de Agricultores de Honduras</Text>
            <Text fontSize="3xl">Federación Nacional de Agricultores de Honduras</Text>
            <Text fontSize="2xl">Federación Nacional de Agricultores de Honduras</Text>
            <Text fontSize="xl">Federación Nacional de Agricultores de Honduras</Text>
          </Stack>

          <Heading as="h1" size="2xl" mt="4rem" mb="2rem">Accordion</Heading>

          <Accordion allowToggle maxW="32rem">
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Heading as="h1" size="2xl" mt="4rem" mb="2rem">Modals</Heading>

          <Button 
            backgroundColor="brandGreen.50" 
            color="brandGreen.30" 
            _hover={{
              backgroundColor: "brandGreen.70"
            }}
            onClick={onOpen}
          >Open Modal</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</Text>

                <Text>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</Text>
              </ModalBody>

              <ModalFooter>
                <Button 
                  backgroundColor="brandGreen.50" 
                  color="brandGreen.30" 
                  _hover={{
                    backgroundColor: "brandGreen.70"
                  }}
                  mr={3} 
                  onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Heading as="h1" size="2xl" mt="4rem" mb="2rem">Tabs</Heading>

          <Tabs variant="unstyled" maxW="48rem">
            <TabList>
              <Tab _selected={{ color: "brandGreen.30", bg: "brandGreen.50" }}>Tab 1</Tab>
              <Tab _selected={{ color: "brandGreen.30", bg: "brandGreen.50" }}>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </TabPanel>
              <TabPanel>
                <p>Mlkshk sriracha hot chicken, raclette next level echo park DIY gochujang unicorn. Quinoa ramps gochujang, vaporware authentic woke iPhone normcore echo park cornhole chambray retro crucifix. Green juice four dollar toast jianbing hammock shabby chic, slow-carb irony disrupt artisan beard vape selfies poutine roof party cloud bread. Succulents chartreuse taiyaki normcore, art party franzen heirloom meditation retro selvage asymmetrical green juice tattooed raw denim lo-fi. Cred williamsburg viral, ugh disrupt hell of kale chips put a bird on it sustainable.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Container>
      </Box>
    </Layout>
)
}

export default UIPage