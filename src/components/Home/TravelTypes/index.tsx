import {  Grid } from '@chakra-ui/react'
import TravelTypesItem from './TravelTypesItem';

export default function TravelTypes(){
    return(
        <Grid
            w={["70%", "80%"]}
            mx="auto"
            templateColumns={["1fr 1fr", "repeat(5, 1fr)"]}
            gap={[4, 8]}
            mt={[0, 9]}
            mb={[9, 20]}
        >
            <TravelTypesItem src="/images/cocktail.svg" title="vida noturna"/>
            <TravelTypesItem src="/images/beach.svg" title="praia" alignRight/>
            <TravelTypesItem src="/images/modern.svg" title="moderno"/>
            <TravelTypesItem src="/images/classic.svg" title="clássico" alignRight/>
            <TravelTypesItem src="/images/earth.svg" title="e mais..." isLastChild />
                    
        </Grid>
    );
}