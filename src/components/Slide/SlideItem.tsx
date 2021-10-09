import { Box, Image, Text, Flex} from '@chakra-ui/react'
import Link from 'next/link'

interface SlideItemProps{
    banner: string;
    name: string;
    id: string;
}

export default function SlideItem({ banner, name, id} : SlideItemProps){

    return(
        
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
                    justify="center"
                    align="center"
                    bgGradient="linear(to-b, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
                >
                    <Link href={`/continent/${id}`}>
                        <Text
                            fontSize={["3xl","5xl"]}
                            fontWeight="700"
                            color="white"
                            _hover={{
                                textDecoration:"underline",
                                cursor:"pointer"
                            }}
                        >
                            {name}
                        </Text>
                    </Link>
                </Flex>
            </Box>
    );
}