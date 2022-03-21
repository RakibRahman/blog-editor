import React from 'react'
import { Box, Flex, Text, Checkbox, FormLabel, Stack, Button } from '@chakra-ui/react';

import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const FileExplorerV2 = ({ data }) => {
    const [expand, setExpand] = React.useState(true);
    const [displayChildren, setDisplayChildren] = React.useState({});
    const toggleList = () => setExpand(!expand);

    const onChangeHandler = (e) => {
        console.log(e)
    }
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
            {data.map((item) => (
                <Flex key={item.name} flexDirection='column'>
                    <Flex>
                        <Checkbox value={item.id}

                            defaultIsChecked={item.id}
                            onChange={(e) => onChangeHandler(e.target)}
                        />
                        {item.name}{' '}
                        {item.child && (
                            <Button
                                onClick={() => {
                                    setDisplayChildren({
                                        ...displayChildren,
                                        [item.name]: !displayChildren[item.name],
                                    });
                                }}
                            >
                                {displayChildren[item.name] ? '-' : '+'}
                            </Button>
                        )}
                    </Flex>
                    {displayChildren[item.name] && item.child && <FileExplorerV2 data={item.child} />}
                </Flex>
            ))}
        </Stack>
    )
}


export default FileExplorerV2;
