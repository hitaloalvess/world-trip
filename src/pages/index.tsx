import { Box, Divider, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Continent} from '../types'

import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelTypes from '../components/TravelTypes';
import { Slide } from '../components/Slide';


export default function Home(){
    
    const [continents, setContinents] = useState<Continent[]>([]);

    useEffect(() => {
        async function searchContinents(){
            const response = await api('/api/continents')
            const data = response.data

            setContinents(data);
        }

        searchContinents();
    }, []);

    return(
        <>
                <Header />
                <Box as="main">
                    <Banner />
                    <TravelTypes />
                    <Divider
                    w={["60px", "80px"]}
                    borderColor="gray.600"
                    mx="auto"
                    mb={[6, 12]} 
                    />

                    <Box as="section" w="80%" mx="auto">
                        <Text
                            fontSize={["xl", "3xl"]}
                            textAlign="center"
                            fontWeight="500"
                        >
                            Vamos nessa? <br/>Então escolha seu continente
                        </Text>
                    </Box>
                    <Box>
                        <Slide continents={continents} />
                    </Box>
                </Box>
        </>
    )
}

