import React from 'react';
import { useSelector } from 'react-redux';
import {
    Stack,
    Input, Textarea, FormLabel
    , Button
} from '@chakra-ui/react';
export const UpdateProfile = () => {
    const value = useSelector((state) => state.counter.value);
    return <Stack>
        <FormLabel htmlFor='userName'>Name:</FormLabel>
        <Input id='userName' name='userName' value={value}>
            {/* <Textarea >
                {value}
            </Textarea> */}
        </Input>
        <Button>Update</Button>
    </Stack>;
};
