import {  Grid } from '@chakra-ui/react'
import TravelTypesItem from './TravelTypesItem';

export default function TravelTypes(){
    return(
        <Grid
            w="80%"
            mx="auto"
            my={[0, 15]}
            justify="space-between"
        >
            <TravelTypesItem src="/images/cocktail.svg" title="vida noturna"/>
            <TravelTypesItem src="/images/beach.svg" title="praia"/>
            <TravelTypesItem src="/images/modern.svg" title="moderno"/>
            <TravelTypesItem src="/images/classic.svg" title="clássico"/>
            <TravelTypesItem src="/images/earth.svg" title="e mais..." isLastChild />
                    
        </Grid>
    );
}