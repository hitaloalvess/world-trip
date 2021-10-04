import { useColorMode, useColorModeValue, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import worldTripServer  from '../server'

import Header from '../components/Header'
import Banner from '../components/Banner';
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
        <>
        <Box>
            <>
                <Header />
                <Banner />
            </>
        </Box>
        </>
    )
}