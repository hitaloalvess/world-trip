import { WrapItem, Stack, Image, Text, Icon, Flex, GridItem } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';

import { FaCircle} from 'react-icons/fa'

interface TravelTypesItemProps{
    title: string;
    src: string ;
    isLastChild?:boolean;
    alignRight?:boolean;
}

export default function TravelTypesItem( { title, src, isLastChild, alignRight } : TravelTypesItemProps){

    const isWideVersion = useBreakpointValue({
        base: false,
        md:true,
        lg:true
    })

    return(
        <GridItem 
            mx={ ( isLastChild && !isWideVersion) && "auto"}  
            colSpan={ (isLastChild && !isWideVersion) ? 2 : 1}
            ml={ ( alignRight && !isWideVersion ) && "auto"}
        >
                <Stack
                    direction={["row", "column"]}
                    align="center"
                    spacing={[2, 6]}
                >
                    { isWideVersion ?
                        <Image src={src} alt={title} w={16} h={16} /> :
                        <Icon
                            as={FaCircle}
                            color="yellow.500"
                            w={2}
                            h={2} 
                        />
                    }
                    
                    <Text
                        fontSize={["md", "lg"]}
                        fontWeight="600"
                        align="center"
                    >
                        {title}
                    </Text>
                </Stack>
        </GridItem>
    );
}