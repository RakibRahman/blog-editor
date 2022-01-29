import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update, addToList, deleteItem } from './userSlice';
import {
    Stack,
    Input, FormLabel, Flex
    , Button, Text
} from '@chakra-ui/react';
export const UpdateProfile = () => {
    const user = useSelector((state) => state.user.profile);
    const userList = useSelector((state) => state.user.profiles)
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ name: 'Pain', email: 'Pain@gmail.com' });
const [selected,setSelected] = useState(0)
    const onChangeHandler = (e) => {

        const inputValue = e.target.value;
        const inputName = e.target.name;
        setFormState({ ...formState, [inputName]: inputValue });
    };

    useEffect(() => {
        console.log(userList);
    }, [userList])

    return <Stack>
        <Text fontSize="lg" fontWeight="bold">{user.name}</Text>
        <Text fontSize="lg" fontWeight="bold">{user.email}</Text>
        <Flex as='form' flexDirection='column' align='center' gap={2} onSubmit={(e) => {
            e.preventDefault();
            // dispatch(update(formState));
        }}>

            <FormLabel htmlFor='userName'>Name:</FormLabel>
            <Input id='userName' name='name' value={formState.name} onChange={onChangeHandler} />
            <FormLabel htmlFor='userName'>Email:</FormLabel>
            <Input id='userEmail' name='email' value={formState.email} onChange={onChangeHandler} />
            <Button type='submit' onClick={() =>
                dispatch(update(formState))
            }>Update</Button>
        </Flex>
        <Button onClick={() => dispatch(addToList(formState))} w='150px' mx='auto'>Add To List</Button>

        {/* <Textarea >
                {value}
            </Textarea> */}
        <Flex flexDirection='column' gap={3}>
            {userList.map((user, i) => (
                <Flex key={i} >
                    <Flex
                        onClick={() => {
                            setFormState(user)
                            setSelected(i);
                        }}
                    ><Text bg={selected===i?'red':'green'} >{user.name}</Text></Flex>
                    <Button onClick={() => dispatch(deleteItem(i))}>❌</Button>
                </Flex>
            ))}
        </Flex>

    </Stack>;
};
