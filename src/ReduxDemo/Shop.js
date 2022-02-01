import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, wishToCart, resetCart, resetWish, deleteItem} from './cartSlice';
export const Shop = () => {
    const [data, setData] = useState();
    const cartItems = useSelector((state) => state.cart.cartList);
    const wishItems = useSelector((state) => state.cart.wishList);
    const dispatch = useDispatch();

    const handleAddItem = (item, type) => {
        dispatch(addItem({ item: item, type: type }))

    };
    // const deleteItem = (item, index) => {
    //     dispatch(deleteItem({ item: item, index: index }))
    // }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    useEffect(() =>
        console.log(cartItems), [cartItems]);
    useEffect(() =>
        console.log(wishItems), [wishItems]);
    return <>
        <Button onClick={() => dispatch(resetCart())}>Clear Cart</Button>
        <Button onClick={() => dispatch(resetWish())}>Clear WishList</Button>

        <SimpleGrid columns={2} spacing={10}>
            {
                data?.map((item, i) =>
                    <Flex key={i} justify="center" align="center" flexDirection='column' w='400px'>
                        <Image src={item.image} alt='product' w='100%' h='300px' objectFit='cover' />
                        <Heading size='md'>{item.title}</Heading>
                        <Text>{item.price}</Text>
                        <Text>{item.category}</Text>
                        <Flex cursor='pointer' justify='space-between' bg='blue.300' w='100%'>
                            <Button onClick={()=>handleAddItem(item,'cart')}>Add to Cart</Button>
                            <Text onClick={()=>handleAddItem(item,'wishList')}>Add to WishList</Text>
                        </Flex>
                    </Flex>)
            }
        </SimpleGrid>


    </>;
};
