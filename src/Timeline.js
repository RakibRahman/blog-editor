import React from 'react'
import './Timeline.css';
import { Box, Text, Heading } from '@chakra-ui/react';

const Timeline = () => {

    const data = [
        {
            date: '2018',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed minima repellat recusandae perferendis odit provident ducimus consequuntur corporis delectus corrupti aliquid illo dolor, autem error excepturi cupiditate expedita. Dignissimos.'
        },
        {
            date: '2019',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed minima repellat recusandae perferendis odit provident ducimus consequuntur corporis delectus corrupti aliquid illo dolor, autem error excepturi cupiditate expedita. Dignissimos.'
        },
        {
            date: '2020',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed minima repellat recusandae perferendis odit provident ducimus consequuntur corporis delectus corrupti aliquid illo dolor, autem error excepturi cupiditate expedita. Dignissimos.'
        },
        {
            date: '2020',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed minima repellat recusandae perferendis odit provident ducimus consequuntur corporis delectus corrupti aliquid illo dolor, autem error excepturi cupiditate expedita. Dignissimos.'
        },
        {
            date: '2020',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed minima repellat recusandae perferendis odit provident ducimus consequuntur corporis delectus corrupti aliquid illo dolor, autem error excepturi cupiditate expedita. Dignissimos.'
        },
    ]

    return (

        <Box style={{ backgroundColor: '#f14', height: 'auto' }}>
            <Box className="timeline"
                _after={{

                    bg: 'lime' //ruler color

                }}
            >

                {data.map((item, index) => (
                    <Box
                        _after={{
                            width: '30px', //container circle width
                            height: '30px', //container circle height
                            backgroundColor: 'white', // container circle bg
                            border: '4px solid #ff9f55' // container circle border
                        }}
                        className={(index % 2 === 0) ? "container left" : "container right"}>
                        <Box
                            padding='20px 30px'
                            bg='white'
                            position='relative'
                            borderRadius='6px'

                            className="content"
                        >
                            <Heading>{item.date}</Heading>
                            <Text>{item.text}</Text>
                        </Box>
                    </Box>

                ))}
            </Box>
        </Box >

    )
}

export default Timeline