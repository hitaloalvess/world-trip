import { Box, Image, Text, Flex} from '@chakra-ui/react'
import Link from 'next/link'

interface SlideItemProps{
    banner: string;
    name: string;
    id: string;
}

export default function SlideItem({ banner, name, id} : SlideItemProps){

    return(
        <Link href={`/continent/${id}`}>
            <Box
                position="relative"
                h="100%"
            >
                <Image 
                    src={banner} 
                    position="absolute"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    zIndex={-1}
                />
                <Flex
                    w="100%"
                    h="100%"
                    bgGradient="linear(to-b, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
                >
                    <Text>{name}</Text>
                </Flex>
            </Box>
        </Link>
    );
}