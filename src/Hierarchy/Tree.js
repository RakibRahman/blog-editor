import React from 'react'
import { data } from './data';
import './Tree.css'
import { Box, Text } from '@chakra-ui/react'

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Card = (props) => {
    // const levelColor = randomcolor();


    return (
        <ul>
            {props.data.map((item, index) => (
                <React.Fragment key={index}>
                    <li>
                        <Box className="card" border='3px dashed red' mb={4}>
                            <div className="image">
                                <img
                                    src={"https://randomuser.me/api/portraits/men/" + randomIntFromInterval(1, 100) + ".jpg"}
                                    alt="Profile"
                                    style={{ borderColor: 'hotpink' }}
                                />
                            </div>
                            <Box className="card-body">
                                <h4>{item.title}</h4>
                                <Text>{item.subtitle}</Text>
                            </Box>

                            <div></div>
                        </Box>
                        {item.children?.length && <Card data={item.children} />}
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );


};

// const TreeComponent = (props) => {
//     return (
//         <div className="container">
//             <div className="org-tree">
//                 Employee Chart
//                 <Card data={data} />
//             </div>
//         </div>
//     );
// }

const Chart = () => {
    return (
        <civ className="container">
            <div className="org-tree">
                <Card data={data} />
            </div>
        </civ>
    );
};

export default Chart;