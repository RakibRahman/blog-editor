import React, { useState, useEffect } from 'react'
import { Box, Text, Flex, Input, FormLabel, Button } from '@chakra-ui/react';
import { Counter } from './Counter';

export const CountInput = () => {
    const initialValue = { start: 0, end: 3000 };
    const [formState, setFormState] = useState(initialValue);


    const onChangeHandler = (e) => {
        const value = parseInt(e.target.value);
        setFormState({ ...formState, [e.target.name]: value });
    };


    useEffect(() => { console.log('formstate render') }, [formState.end])
    return (
        <Box>
            <Flex as='form' flexDirection='column' onSubmit={(e) => {
                e.preventDefault()
                console.log(formState);
            }}>

                <FormLabel htmlFor="start">Start:</FormLabel>
                <Input name='start' type="number" value={formState.start} onChange={onChangeHandler} />
                <FormLabel htmlFor="end">End:</FormLabel>
                <Input name='end' type="number" value={formState.end} onChange={onChangeHandler} />
                <Button type="submit">Save</Button>
            </Flex>
            {/* <Text>{formState.start}</Text>
            <Text>{formState.end}</Text> */}

            <Counter endValue={formState.end} />


        </Box>
    )
};


