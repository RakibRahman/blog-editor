import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/*
! read data from the store with useSelector
!  dispatch actions using useDispatch
*/
import { decrement, increment, incrementByAmount, decrementByAmount, resetCounter } from './counterSlice'
import { Text, Flex, Button, Heading } from '@chakra-ui/react';
export const Counter = () => {
    const value = useSelector((state) => (state.counter.value));
    const dispatch = useDispatch();

    return <Flex w='100%' justify='center' align='center' flexDirection='column'>

        <Text>{value}</Text>
        <Flex justify='center' align='center' gap={3}>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            <Button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</Button>
            <Button onClick={() => dispatch(decrementByAmount(5))}> Decrement by 5</Button>
            <Button onClick={() => dispatch(resetCounter())}>Reset</Button>
        </Flex>

    </Flex>;
};
