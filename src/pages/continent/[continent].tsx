import { api } from '../../services/api'
import { GetStaticProps, GetStaticPaths} from 'next';
import { Flex, Image, Box, Text, Stack, HStack, VStack, Icon, Wrap, Tooltip} from '@chakra-ui/react'
import { FiInfo} from 'react-icons/fi'
import { InfoIcon } from '@chakra-ui/icons'
import Head from 'next/head'

import Header from '../../components/Header';
import Card from '../../components/Card';

type Continent = {
    id:string;
    name:string;
    banner:string;
    description:string;
    number_countries: number;
    number_languages: number;
    number_most_popular_cities: number;
    most_popular_cities:{
        slug:string;
        name:string;
        banner: string;
        country: string;
        countryCode:string;
    }[]
}

interface ContinentProps{
    continent: Continent;
}

export default function Continent( { continent } : ContinentProps){

    return(
        <>
            <Head>
                <title>{`Continente | ${continent.name}`}</title>
            </Head>
            
            <Header />

            <Box as="main">
                <Flex
                    as="section"
                    w="100%"
                    h={["150px", "450px"]}
                    position="relative"
                >
                    <Image 
                        src={continent.banner}  
                        alt={`banner ${continent.name}`}
                        w="100%"
                        h="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        zIndex="-1"
                        objectFit="cover"
                    />
                    <Flex
                        w="100%"
                        h="100%"
                        justify={["center", "flex-start"]}
                        align={["center" ,"flex-end"]}
                        px="36"
                        py="16"
                        bgGradient="linear(to-b, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
                    >
                        <Text 
                            as="h1" 
                            color="white"
                            fontSize={["xl", "3xl"]}
                            fontWeight="600"
                        >
                            {continent.name}
                        </Text>
                    </Flex>
                </Flex>
                <Box
                    as="section"
                    w={["90%", "80%"]}
                    my={["6","20"]}
                    mx="auto"
                >
                    <Stack
                        direction={["column", "row"]}
                        justify="space-between"
                        spacing={18}
                        mb={["8", "20"]}
                    >
                        <Text
                            maxWidth={["100%", "600px"]}
                            fontSize={["sm", "lg"]}
                            fontWeight="400"
                        >
                            {continent.description}
                        </Text>
                        <HStack spacing={10} as="article">
                            <VStack
                            >
                                <Text
                                    as="h1"
                                    w="100%"
                                    fontSize="3xl"
                                    fontWeight="600"
                                    color='yellow.500'
                                    textAlign={["start", "center"]}
                                >
                                    {continent.number_countries}
                                </Text>
                                <Text
                                    fontSize="md"
                                    fontWeight="600"
                                >
                                    países
                                </Text>
                            </VStack>
                            <VStack>
                                <Text
                                    as="h1"
                                    w="100%"
                                    fontSize="3xl"
                                    fontWeight="600"
                                    color='yellow.500'
                                    textAlign={["start", "center"]}
                                >
                                    {continent.number_languages}
                                </Text>
                                <Text
                                    fontSize="md"
                                    fontWeight="600"
                                >
                                    línguas
                                </Text>
                            </VStack>
                            <VStack>
                                <Text
                                    as="h1"
                                    w="100%"
                                    fontSize="3xl"
                                    fontWeight="600"
                                    color='yellow.500'
                                    textAlign={["start", "center"]}
                                >
                                    {continent.number_most_popular_cities}
                                </Text>
                                <HStack>
                                    <Text
                                        fontSize="md"
                                        fontWeight="600"
                                    >
                                        cidades +100
                                    </Text>
                                    <Tooltip
                                        label="Quantidade de cidades classificadas entre as 100 mais visitadas do mundo"
                                        fontSize="sm"
                                        maxWidth="200px"
                                    >
                                        <InfoIcon />
                                    </Tooltip>
                                </HStack>
                            </VStack>
                        </HStack>

                    </Stack>
                    <VStack
                        as="section"
                        spacing={10}
                        align="flex-start"
                    >
                        <Text 
                            as="h1"
                            fontSize="3xl"
                            fontWeight="600"
                            textAlign="start"
                        >
                            Cidades +100
                        </Text>
                        <Wrap 
                        w="100%"
                            justify={["center", "flex-start"]}
                            spacing={4}
                        >
                            {continent.most_popular_cities.map( city => (
                                <Card 
                                    key={city.slug}
                                    banner={city.banner}
                                    name={city.name}
                                    country={city.country}
                                    countryCode={city.countryCode}
                                />
                            ))}
                        </Wrap>
                    </VStack>
                </Box>
                
            </Box>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = () => {

    return{
        paths:[],
        fallback: 'blocking'
    }
}

export const getStaticProps : GetStaticProps = async({params }) => {

        const { continent } = params

        const response = await api(`/continents/${continent}`);
        const data = await response.data;
        
        return {
            props:{
                continent: data,
            },
            revalidate: 60 * 60 * 24 //24 horas
        }

}