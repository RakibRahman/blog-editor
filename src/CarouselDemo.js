import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box, Flex, Text, Image, Stack,Heading,Link
} from '@chakra-ui/react';
import Carousel from 'nuka-carousel';

export const CarouselDemo = () => {
    const [selectedIndex, setsSelectedIndex] = useState(0);
    const items = [
        {
            image: {
                path: 'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
                altText: 'Demo Image',
                title: 'title 1'
            },

        },
        {
            image: {
                path: 'https://images.unsplash.com/photo-1643149005853-8f0e1b6a6cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
                altText: 'Demo Image',
                title: 'title 2'
            },

        },
        {
            image: {
                path: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
                altText: 'Demo Image',
                title: 'title 3'
            },

        }
    ]
    useEffect(() => {
        console.log('image no ', selectedIndex);
    }, [selectedIndex]);
    return <>

        <Box w='500px' h='100%'>
            <Carousel
                slidesToShow={1}>
                {items.map((item, index) => (
                    <Flex flexDirection='column' key={index.toString()}>

                        <Image key={index.toString()} w='100%' h='300px' src={item.image.path} alt={item.image.altText} objectFit='cover'
                        />

                        <Text color='red' textAlign='center'></Text>

                        <Link href='https://chakra-ui.com' isExternal textAlign='center'>
                            {item.image.title}
                        </Link>
                    </Flex>
                ))}

            </Carousel>
        </Box>

        <Box>
            <Box overflow='hidden' border='1px solid green' w='200px'>
                <Image w='100%' height='200px' src={items[selectedIndex].image.path} alt={items[selectedIndex].image.altText} objectFit='cover' borderRadius='30px' _hover={{
                    transform:'scale(1.5)'
                }}  />
            </Box>
            <Accordion>
                {items.map((item, index) => (

                    <AccordionItem key={index.toString()} onClick={() => setsSelectedIndex(index)}>
                        <AccordionButton>ITEM {index + 1}</AccordionButton>
                        <AccordionPanel>
                            {item.image.title}
                        </AccordionPanel>
                    </AccordionItem>


                ))}

            </Accordion>
        </Box>
       
    </>;
};
