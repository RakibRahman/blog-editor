import React from 'react'
import './Style.css';
import { data } from './data';
import { Box, Text, Image, Heading, Link, List, ListItem } from '@chakra-ui/react'


const Card = (props) => {
    console.log(data)
    return (
        <Box>
            <Box className="tree">
                <List>
                    {props.data.map((item, index) => (

                        <ListItem>


                            <Link href='#'>
                                <Image src={`https://picsum.photos/200/300?random=${index + 1}`} alt='img default' />
                                <span>{item.title}</span>
                                <span>{item.title}</span>
                            </Link>

                            {item.children?.length && <Card data={item.children} />}



                        </ListItem>

                    ))}
                </List>
            </Box>
        </Box>
    )

}

const TreeComponent = () => {
    return (
        <>

            <Card data={data} />

        </>
    )
}
export default TreeComponent;