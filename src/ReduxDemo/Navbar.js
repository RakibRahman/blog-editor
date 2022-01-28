import React from 'react';
import { Spacer, Flex, Box, Button, Heading,Text } from '@chakra-ui/react';
export const Navbar = () => {
    return <>
        <Flex>
            <Box p='2'>
                <Heading size='lg'>Chakra</Heading>
            </Box>
            <Spacer />
            <Flex>
                <Heading colorScheme='teal'  size='sm' mr={2}>
                  John
                </Heading>
                <Text colorScheme='teal'>LogOut</Text>
            </Flex>
        </Flex>
    </>;
};
