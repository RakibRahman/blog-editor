import React from 'react'
import { Box, Flex, Text, Checkbox, FormLabel, Stack } from '@chakra-ui/react';

import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const FileExplorerV2 = ({ data }) => {
    const [expand, setExpand] = React.useState(true);
    const toggleList = () => setExpand(!expand);


    //  <Stack>

    // <Flex align="center" color='green' onClick={toggleList}>{data.name} {expand ? <AiFillCaretDown /> : <AiFillCaretRight />}</Flex>
    // {
    //     data.items && data.items.map((item, index) => {
    //         return <Checkbox display={expand ? 'block' : 'none'} pl='5px'>

    //             <FileExplorer data={item} />
    //         </Checkbox>
    //     })
    // }

    // </Stack >

    return (
        <Stack>


            <Flex onClick={toggleList}>
                <Checkbox />
                <Flex>
                    {data.name}
                    {expand ? <AiFillCaretDown /> : <AiFillCaretRight />}
                </Flex>
            </Flex>
            {data.items && data.items.map((item, index) => {
                return <Flex display={expand ? 'block' : 'none'} pl='15px'>

                    <FileExplorerV2 data={item} />

                </Flex>
            })}

        </Stack>
    )
}


export default FileExplorerV2
