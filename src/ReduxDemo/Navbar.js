import React from 'react';
import { Spacer, Flex, Box, Button, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const user = useSelector((state) => state.user.profile);

    return <>
        <Flex>
            <Box p='2'>
                <Heading size='lg'>Chakra</Heading>
            </Box>
            <Spacer />
            <Flex>
                <Heading colorScheme='teal'  size='sm' mr={2}>
                  {user.name}
                </Heading>
                <Text colorScheme='teal'>LogOut</Text>
            </Flex>
        </Flex>
    </>;
};
