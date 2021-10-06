import { api } from '../../services/api'
import Head from 'next/head'
import { Flex, Image, Box, Text } from '@chakra-ui/react'

import { GetStaticProps, GetStaticPaths} from 'next';
import Header from '../../components/Header';

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

            <Flex
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
                <Box
                    w="100%"
                    h="100%"
                    bgGradient="linear(to-b, rgba(19, 19, 18, 0.35), rgba(19, 19, 18, 0.45),rgba(19, 19, 18, 0.65))"
                >
                    <Text color="white">Europa</Text>
                </Box>
            </Flex>
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

        const { slug } = params

        const response = await api(`/continents/${slug}`);
        const data = await response.data;
        
        return {
            props:{
                continent: data,
            },
            revalidate: 60 * 60 * 24 //24 horas
        }

}