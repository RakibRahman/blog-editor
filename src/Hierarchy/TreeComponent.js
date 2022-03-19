import React from 'react'
import './Style.css';
import { data } from './data';
import { Box, Text, Image, Heading, Link, List, ListItem, Stack } from '@chakra-ui/react'


const Card = (props) => {

    return (


        <ul>
            {props.data.map((item, index) => (
                <li>

                    <a href="#">

                        <img src="images/1.jpg" />

                        <span>{item.title}</span>
                        <span>{item.subtitle}</span>
                        
                        {/* <span>{item.id}</span> */}

                    </a>

                    {item.children && (
                        <Card data={item.children} />

                    )}
                </li>
            ))}
        </ul>


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