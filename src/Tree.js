import React, { useState, useEffect } from 'react'
import Tree from 'react-d3-tree';
import { Box, Select, FormLabel, Input, FormControl, Stack, Flex } from '@chakra-ui/react';
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const TreeComponent = () => {

    const orgChart = {
        name: 'CEO',
        children: [
            {
                name: 'Manager',
                attributes: {
                    department: 'Production',
                },
                children: [
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Fabrication',
                        },
                        children: [
                            {
                                name: 'Executive',
                                attributes: {
                                    department: 'HR'
                                },
                                children: [
                                    {
                                        name: 'Employee 1',
                                        attributes: {
                                            team: 'Marketing'
                                        }
                                    },
                                    {
                                        name: 'Employee 2',
                                        attributes: {
                                            team: 'SEO'
                                        }
                                    }
                                ]

                            },

                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: 'Worker',
                                children: [
                                    {
                                        name: 'Employee 3',
                                        attributes: {
                                            team: 'Marketing'
                                        }
                                    },
                                    {
                                        name: 'Employee 4',
                                        attributes: {
                                            team: 'SEO',

                                        }
                                    }
                                ]
                            },
                        ],
                    },
                ],
            }, {
                name: 'CTO',
                attributes: {
                    department: 'Development',
                }
            },
        ],
    };
    const [data, setData] = useState(orgChart);
    const [expand, setExpand] = React.useState(false);
    const toggleList = () => setExpand(!expand);

    const onChangeHandler = (e) => {
        let value = e.target.value

        setData({
            ...data,
            [e.target.name]: value
        });
    };


    useEffect(() => {




    }, [data])

    const ChildList = ({ list }) => {


        return (

            <Stack>
                <Flex onClick={toggleList}>

                    <Flex>
                        {list?.name}
                        {expand ? <AiFillCaretDown /> : <AiFillCaretRight />}
                    </Flex>
                </Flex>

                {list.children && list.children.map((item, index) => {
                    return <Flex key={index} display={expand ? 'block' : 'none'} pl='15px'>
                        <Box>
                            {item?.attributes}
                        </Box>
                        <ChildList list={item} />

                    </Flex>
                })}

            </Stack>)

    }

    return (
        <Box overflow='hidden'>
            <Box>
                <FormControl>
                    <FormLabel>
                        Root Name:
                        <Input name='name' type='text'
                            value={data.name}
                            onChange={onChangeHandler} />
                    </FormLabel>

                </FormControl>

            </Box>

            <ChildList list={data} />
            {/* <div id="treeWrapper" style={{ width: '100em', height: '50em' }}>
                <Tree zoomable={false} orientation='vertical' data={data} pathFunc='step'
                    separation={{
                        siblings: 3,
                        nonSiblings: 2
                    }}


                />
            </div> */}


        </Box>
    )
}

export default TreeComponent;