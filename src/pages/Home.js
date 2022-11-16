import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Container, Grid, GridItem, Heading, HStack, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { BsPatchQuestion, BsPen, BsPencilSquare, BsShare, BsBookmark } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { IoMdMore, IoMdClose } from "react-icons/io";
import { MdOutlineModeComment, MdOutlineReportProblem } from "react-icons/md";
import { GrLike, GrDislike } from "react-icons/gr";
import { AiOutlineCopy } from "react-icons/ai"
import { format } from 'date-fns';

const Home = () => {

  const [allFeeds, setAllFeeds] = React.useState([1, 2, 3, 4]);

  const handleStopSeeingThis = (id) => {
    setAllFeeds(prev => prev.filter((feed, i) => i !== id))
  }

  const [createContentTab, setCreateContentTab] = React.useState(0);
  const [showCreateModal, setShowCreateModal] = React.useState(false);

  const handleCreate = (type) => {
    if (type === "post") {
      setCreateContentTab(1)
    }
    setCreateContentTab(0)
    setShowCreateModal(true);

  }

  return (
    <Container bgColor={"#D7E2E7"} p={6} minH={"100vh"} maxW={"100%"}>
      {/* Feed */}
      <Grid mx={"auto"} maxW={"container.lg"} templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem colSpan={2} >
          <AskOrShareInput handleCreate={handleCreate} />
          {
            allFeeds.map((feed, i) => <FeedCard onPressStop={handleStopSeeingThis} feed={feed} key={i} />)
          }
        </GridItem>
      </Grid>
      <Modal isOpen={showCreateModal} size="2xl" isCentered onClose={() => setShowCreateModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs colorScheme="red" index={createContentTab}>
              <TabList>
                <Tab onClick={() => setCreateContentTab(0)}>Add Question</Tab>
                <Tab onClick={() => setCreateContentTab(1)}>Create Post</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Input variant={"flushed"} placeholder={`Start your question with "What", "How", "Why" etc `} />
                </TabPanel>
                <TabPanel>
                  <Textarea placeholder='Say something...' />
                </TabPanel>
              </TabPanels>
            </Tabs>

          </ModalBody>

          <ModalFooter>

            <Button variant='ghost' onClick={() => setShowCreateModal(false)}>Cancel</Button>
            <Button colorScheme='red' mr={3} >
              {createContentTab === 0 ? "Add Question" : "Post"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Container>
  )
}

function AskOrShareInput({ handleCreate }) {
  return (
    <Card bgColor="white">
      <CardBody p="3">
        <HStack alignItems={"flex-start"}>
          <Avatar size="sm" name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Box w="full">
            <Input variant={"filled"} placeholder="What do you want to ask or share?" />
            {/* CTA's */}
            <HStack my={2} justifyContent="space-evenly">
              <Button size="sm" onClick={() => handleCreate("ask")} variant={"ghost"} colorScheme="red" leftIcon={<BsPatchQuestion />}>Ask</Button>
              <Link to="/answer"><Button size="sm" variant={"ghost"} colorScheme="red" leftIcon={<BsPen />}>Answer</Button></Link>
              <Button size="sm" onClick={() => handleCreate("post")} variant={"ghost"} colorScheme="red" leftIcon={<BsPencilSquare />}>Post</Button>
            </HStack>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  )
}

function FeedCard({ feed, onPressStop }) {
  return (

    <Card bgColor="white" my={3} rounded="sm">
      <FeedCardHeader feed={feed} onPressStop={onPressStop} />
      <FeedCardBody feed={feed} />
      <FeedCardBodyFooter />
    </Card>
  )
}

function FeedCardHeader({ feed, onPressStop }) {
  const date = format(new Date(), 'dd MMM, yy')
  return (
    <CardHeader pb={1}>
      <HStack justifyContent="space-between">
        {/* Profile  */}
        <HStack alignItems="flex-start">
          <Avatar size="sm" name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Box>
            <HStack alignItems="center">
              <Heading size="xs">Ana Houslen</Heading>
              <Link to="/">
                <Heading fontSize="xs" color="blue.400">Follow</Heading>
              </Link>
            </HStack>
            <Text fontSize="xs">{date}</Text>
          </Box>
        </HStack>
        {/* Options */}
        <HStack>
          <Menu>
            <MenuButton as={IconButton} aria-label='More Options' size="sm" colorScheme="red" variant="ghost" icon={<IoMdMore />} />
            <MenuList>
              {
                [
                  { title: "Copy link", icon: <AiOutlineCopy /> },
                  { title: "Not interested in this", icon: <IoMdClose /> },
                  { title: "Bookmark", icon: <BsBookmark /> },
                  { title: "Report", icon: <MdOutlineReportProblem /> },
                ].map(({ title, icon }, i) => <MenuItem icon={icon} key={i}>{title}</MenuItem>
                )
              }
            </MenuList>
          </Menu>
          <IconButton onClick={() => onPressStop(feed)} size="sm" aria-label='Stop Seeing This' icon={<IoMdClose />} />
        </HStack >
      </HStack >
    </CardHeader >
  )
}

function FeedCardBody({ feed }) {
  return (
    <Link to={`/${feed}`}>
      <CardBody py={2}>
        <Heading size="md">What are your favorite wholesome pictures?</Heading>
        <Text fontSize="sm">I really don't understand guys with this problem… it's so wholesome and beautiful.</Text>
      </CardBody>
    </Link>
  )
}

function FeedCardBodyFooter() {
  return (
    <CardFooter>
      <Box>
        <HStack>
          <Text fontSize="sm"> 79.6K views</Text>
        </HStack>
        <HStack>
          {/* Button group */}
          <ButtonGroup size='sm' isAttached variant='outline'>
            <Button size="sm" leftIcon={<GrLike />}>12.4k</Button>
            <Button size="sm" leftIcon={<GrDislike />}></Button>
          </ButtonGroup>
          <Button size="sm" variant="ghost" rounded="lg" leftIcon={<BsShare />}>40</Button>
          <Button size="sm" variant="ghost" rounded="lg" leftIcon={<MdOutlineModeComment />}>91</Button>
        </HStack>
      </Box>
    </CardFooter>
  )
}

export default Home