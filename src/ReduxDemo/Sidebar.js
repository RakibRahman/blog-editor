import React from 'react';
import {
    Flex,
    Drawer,
    Text,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Input, useDisclosure, Button, Heading
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteItem } from './userSlice';
import { deleteItem} from './cartSlice'
export const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const user = useSelector((state) => state.user.profile);
    const userList = useSelector((state) => state.user.profiles);
    const cartItems = useSelector((state) => state.cart.cartList);

    const dispatch = useDispatch();

    const handleDeleteItem = (itemKey, index) => {
        dispatch(deleteItem({ itemKey: itemKey, index: index }))
    }
    return <>

        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Cart
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
                <Heading>{user.email}</Heading>
                <DrawerBody>
                    <Input placeholder='Type here...' />
                    <Flex flexDirection='column' gap={3}>
                        {cartItems.map((item, i) => (
                            <Flex key={i} >
                                <Text>{item.title}</Text>
                                <Button onClick={() => handleDeleteItem('cart',i)}>❌</Button>
                            </Flex>
                        ))}
                    </Flex>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    </>;
};
