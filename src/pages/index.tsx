import { Box, Flex, Text, Image, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import worldTripServer  from '../server'

import Header from '../components/Header/'
import Banner from '../components/Home/Banner';
import TravelTypes from '../components/Home/TravelTypes';
export default function Home(){
    
    worldTripServer();
    
    // useEffect(() => {
    //     async function searchContinent(){
    //         const response = await fetch('/api/continents')
    //         const data = await response.json()

    //         console.log(data)
    //     }

    //     searchContinent()
    // },[])

    
    return(
        <Box>
                <Header />
                <Banner />
                <TravelTypes />
        </Box>
    )
}