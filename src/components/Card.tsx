import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { WrapItem, Image, Box, VStack, Text, Flex } from '@chakra-ui/react';


interface CardProps{
    banner: string;
    name: string;
    country: string;
    countryCode: string;
}

export default function Card( { banner, name, country, countryCode } : CardProps){

    return(
        <WrapItem
            w="256px"
            h="279px"
            border="1px"
            borderColor="yellow.500"
        >
            <Box
                w="100%"
                h="100%"
            >
                <Image
                    src={banner}
                    alt={`banner ${name}`}
                    w="100%"
                    h="170px"
                />
                <Flex
                    py="5"
                    px="6"
                    justify="space-between"
                >
                    <VStack spacing="1" >
                        <Text
                            as="h1"
                            w="100%"
                            fontSize="xl"
                            fontWeight="600"
                        >
                            {name}
                        </Text>
                        <Text
                            w="100%"
                            fontSize="md"
                            color="gray.400"
                        >
                                
                            {country}
                        </Text>
                    </VStack>
                    <Box alignSelf="center">
                        <ReactCountryFlag
                          countryCode={countryCode}
                          aria-label={name}
                          svg
                          style={{
                              width:'40px',
                              height:'40px',
                              borderRadius:'100%',
                              objectFit:"cover",
                          }}
                        />
                    </Box>
                </Flex>
            </Box>
        </WrapItem> 
    );
}