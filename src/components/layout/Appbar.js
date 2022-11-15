import { Box, Button, Heading, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";

const Appbar = () => {
    return (
        <HStack justifyContent={"space-between"} bg='#24333C' w='100%' p={4} color='white'>
            <Heading>FINASTRA</Heading>
            {/* Search */}
            <Box>
                <InputGroup variant="filled" minW={320}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<BsSearch color='gray.300' />}
                    />
                    <Input placeholder='Search keyword' />
                </InputGroup>
            </Box>
            {/* Menu */}
            <HStack gap={4}>
                {
                    [
                        { title: 'Home', href: "/" },
                        { title: 'Ask', href: "/ask" },
                        { title: 'Topics', href: "/topics" },
                        { title: 'Explore', href: "/explore" },
                    ].map(({ title, href }, i) =>
                        <Link to={href}>
                            <Button variant="link">{title}</Button>
                        </Link>
                    )
                }
                <Button rounded="full" colorScheme={"red"}>Sign Up</Button>
            </HStack>
        </HStack>
    )
}

export default Appbar