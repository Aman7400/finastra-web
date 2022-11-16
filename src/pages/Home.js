import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Grid, GridItem, Heading, Highlight, HStack, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { GoLocation } from "react-icons/go"
import { BiDislike, BiLike } from "react-icons/bi"
import { VscReport } from "react-icons/vsc"
import { MdOutlineComment } from "react-icons/md"

const Home = () => {
  return (
    <Container bgColor={"#D7E2E7"} padding={12} minH={"100vh"} maxW={"100%"}>
      {/* Feed */}
      <Grid mx={"auto"} maxW={"container.lg"} templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem colSpan={2} >
          <Card bgColor={"white"}>
            <CardHeader>
              <Heading>Why China is a mF</Heading>
              <HStack gap={1}>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
              </HStack>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="red">
                Answer it
              </Button>
            </CardFooter>
          </Card>
          {/* BEST */}
          <AnswerCard isBestAnswer comments={[1, 2, 3]} />
          <AnswerCard comments={[1, 2]} />
          <AnswerCard />
        </GridItem>

        <GridItem colSpan={1} >
          <Heading size={"lg"}>
            Related Questions
          </Heading>
          <Box p={2}>
            <Text fontSize={"sm"}>IS THERE ANY HOPE FOR TATA MO</Text>
            <Text fontSize={"xs"}>- Ackerman</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Home;

function BasicPersonInfo() {
  return (
    <HStack>
      <Heading size="md">Ben Affelc</Heading>
      <Text >20 March 2014</Text>
      <HStack>
        <GoLocation />
        <Text>London UK</Text>
      </HStack>
    </HStack>
  )
}

function PersonAnswer() {
  return (
    <Box my={4}>
      <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sit amet orci eget finibus. Donec orci massa, tincidunt a lectus nec, tincidunt tincidunt lorem. Morbi molestie dignissim laoreet. Maecenas id est luctus dolor auctor bibendum. Vivamus tempus pharetra molestie. Morbi congue mi finibus varius accumsan. Duis tincidunt imperdiet porta. Nulla rhoncus accumsan velit, sed fringilla ante consectetur sit amet. Maecenas blandit, magna sit amet cursus interdum, tellus metus feugiat elit, interdum pulvinar risus libero et quam. Donec sit amet fermentum mauris, sit amet viverra urna.</Text>
    </Box>
  )
}

function AnswerActions() {
  return (
    <HStack my={2} w={"full"} justifyContent="space-between">
      {/* STATS */}
      <AnswerStats />
      {/* CTA'S */}
      <AnswerCTAs />
    </HStack>
  )
}

function AnswerStats() {
  return (
    <HStack>
      <HStack>
        <BiLike />
        <Text fontSize="xs">222k</Text>
      </HStack>
      <HStack>
        {/* <Text fontSize="xs">222k</Text> */}
        <BiDislike />
      </HStack>
    </HStack>
  )
}

function AnswerCTAs() {
  return (
    <HStack>
      <HStack>
        <VscReport />
        <Text fontSize="xs">Report Abuse</Text>
      </HStack>
      <HStack>
        <MdOutlineComment />
        <Text fontSize="xs">Add a comment</Text>
      </HStack>
    </HStack>
  )
}

function AnswerCard({ details, isBestAnswer = false, index, comments=[] }) {
  return (
    <Card w={"full"} borderRadius={!isBestAnswer && "none"} my={isBestAnswer ? 4 : 0} bgColor={"white"}>
      {/* Heading */}
      {
        isBestAnswer &&
        <CardHeader bgColor={isBestAnswer ? "green.100" : "blue.100"}>
          <HStack >
            {
              isBestAnswer ?
                <>
                  <Heading size="md">
                    Best Answer
                  </Heading>
                  <Heading size="sm" color={"green.400"}>Asker's Choice</Heading>
                </>

                :
                <>
                  <Heading size="md">
                    Other Answers
                  </Heading>
                </>
            }
          </HStack>
        </CardHeader>
      }
      <CardBody >
        <HStack alignItems={"flex-start"} p={2}>
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Box w={"full"} p={2}>
            {/* Person Info */}
            <BasicPersonInfo />
            {/* Person's Answer */}
            <PersonAnswer />
            {/* Answer Stats & CTA */}
            <AnswerActions />
            {/* Comments */}
            <Box  my={4}>
              {
                comments.map((comment, i) => <AnswerComment key={i} />)
              }
            </Box>
            
          </Box>
        </HStack>
      </CardBody>
    </Card>
  )
}


function AnswerComment() {
  return (
    <Card w={"full"}>
      <CardBody>
        <HStack>
          <Avatar size="sm" name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Box>
            <HStack>
              <Heading size="sm">Ben Affelc</Heading>
              <Text size="xs">on 20 March 2014</Text>
            </HStack>
            <Text fontSize="xs">View a summary of all your customers over the last month.</Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  )
}