import { useState } from 'react'
import { Box, Flex, Stack, FormLabel, Checkbox, Text } from '@chakra-ui/react';
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";


const handleChange = () => {

    console.log('The checkbox was toggled');

}; 

const Tree = ({ data = [] }) => {
    return (

        <Stack>
            {data.map((tree) => (
                <TreeNode node={tree} />
            ))}
        </Stack>

    );
};

const TreeNode = ({ node }) => {
    const [childVisible, setChildVisibility] = useState(true);

    const hasChild = node.child ? true : false;

    return (
        <Box>
            <Flex onClick={(e) => setChildVisibility((v) => !v)} border='1px solid red'>


                <Checkbox id={node.id} value={node.id} onChange={handleChange}/>
                <FormLabel htmlFor={node.id}> {node.name}</FormLabel>
                <Text> {hasChild && childVisible ? <AiFillCaretDown /> : <AiFillCaretRight />

                }
                </Text>

            </Flex>

            {hasChild && childVisible && (

                <Stack>
                    <Tree data={node.child} />
                </Stack>

            )}
        </Box>
    );
};

const TreeList = ({ data }) => {
    return (
        <>


            <Tree data={data} />

        </>
    );
};

export default TreeList;