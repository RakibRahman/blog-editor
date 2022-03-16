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
            <Box className="timeline" _after={{

                content: `""`,
                position: 'absolute',
                width: '6px',
                backgroundColor: 'white',
                top: 0,
                bottom: 0,
                left: '50%',
                marginLeft: '-3px',
            }}>

                {data.map((item, index) => (
                    <Box
                        padding='10px 40px'
                        position='relative'
                        backgroundColor='inherit'
                        width='50%'

                        _after={{
                            content: `""`,
                            position: 'absolute',
                            width: '25px',
                            height: '25px',
                            right: '-17px',
                            backgroundColor: 'white',
                            border: '4px solid #ff9f55',
                            top: '15px',
                            borderRadius: '50%',
                            zIndex: 1
                        }}

                        className={(index % 2 === 0) ? "left" : "right"}>
                        <Box className="content">
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