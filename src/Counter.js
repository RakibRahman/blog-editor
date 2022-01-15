/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, } from 'react'
import { Box } from '@chakra-ui/react';

export const Counter = ({ endValue }) => {

    const [value, setValue] = useState(null);
    const ref = useRef(0);
    const accumulator = endValue / 100; // more value more slow

    const updateCounter = () => {

        const result = Math.ceil(ref.current + accumulator);
        if (ref.current < endValue) {
            ref.current = result;
            setValue(result);
        }
        else {
            setValue(endValue);
        };
        setTimeout(() => updateCounter(), 10);  // more value more slow
    };

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            updateCounter();
        }
        return () => (isMounted = false)

    }, []);

    return (
        <Box fontSize="xl" fontWeight="bold" transition='all 0.3s ease'>
            {value}
        </Box>
    )
};


