import React from 'react'
import './Style.css';
import { data } from './data';
import { Box, Text, Image, Heading, Link, List, ListItem, Stack, Button } from '@chakra-ui/react'


const Card = (props) => {
    let newObject = {};
    React.useEffect(() => {

        console.log(props.data)
     }, [props])

    const getObj
        = (id) => {


            const obj = props.data.filter((item) => (item.id !== id));
           

         


        }


    return (


        <List>
            {props.data.map((item, index) => (
                <ListItem key={item.id}>

                    <Link href={item?.link} onClick={() => getObj(item.id)}>

                        <Image src={`https://picsum.photos/200/300?random=${index + 1}`} />

                        <Text as='span' mb={1}>{item.title}</Text>
                        <Text as='span'>{item.subtitle}</Text>


                    </Link>

                    {item.children.length > 0 && (
                        <Card data={item.children} />

                    )}
                </ListItem>
            ))}
        </List>


    )

}

const TreeComponent = () => {
    return (
        <div className="tree">

            <Card data={data} />

        </div>
    )
}
export default TreeComponent;