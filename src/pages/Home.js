import { Avatar, Box, Button, Card, CardBody, Container, Grid, GridItem, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import {BsPatchQuestion, BsPen,BsPencilSquare} from "react-icons/bs"

const Home = () => {
  return (
    <Container bgColor={"#D7E2E7"} p={6} minH={"100vh"} maxW={"100%"}>
      {/* Feed */}
      <Grid mx={"auto"} maxW={"container.lg"} templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem colSpan={2} >
          <AskOrShareInput />
        </GridItem>
      </Grid>
    </Container>
  )
}

function AskOrShareInput() {
  return (
    <Card bgColor="white">
      <CardBody p="3">
        <HStack alignItems={"flex-start"}>
          <Avatar size="sm" name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Box w="full">
            <Input variant={"filled"} placeholder="What do you want to ask or share?" />
            {/* CTA's */}
            <HStack my={2} justifyContent="space-evenly">
              <Button size="sm" variant={"ghost"} colorScheme="red" leftIcon={<BsPatchQuestion />}>Ask</Button>
              <Button size="sm" variant={"ghost"} colorScheme="red" leftIcon={<BsPen />}>Answer</Button>
              <Button size="sm" variant={"ghost"} colorScheme="red" leftIcon={<BsPencilSquare />}>Post</Button>
            </HStack>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default Home