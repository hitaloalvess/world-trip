import { Box, Divider, Text } from '@chakra-ui/react';

import Header from '../components/Header/'
import Banner from '../components/Home/Banner';
import TravelTypes from '../components/Home/TravelTypes';
import { Slider } from '../components/Home/Slider';

export default function Home(){
    
    return(
        <Box>
                <Header />
                <Banner />
                <TravelTypes />
                <Divider
                  w={["60px", "80px"]}
                  borderColor="gray.600"
                  mx="auto"
                  mb={[6, 12]} 
                />

                <Box w="80%" mx="auto">
                    <Text
                        fontSize={["xl", "3xl"]}
                        textAlign="center"
                        fontWeight="500"
                    >
                        Vamos nessa? <br/>Então escolha seu continente
                    </Text>
                </Box>
                {/* <Box>
                    <Slider />
                </Box> */}
        </Box>
    )
}