import { Flex, Image, Box, Text} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'

export default function Banner(){

    const isWideVersion = useBreakpointValue({
        base: false,
        md:true,
        lg:true
    })

    return(
        <Flex
                    position="relative"
                    h="360"
                    w="100%"
                >     
                    <Image
                        src="/images/background.svg"
                        alt="background banner"
                        w="100%"
                        height="320"
                        position="absolute"
                        left="0"
                        right="0"
                        top="0"
                        objectFit="cover"
                        zIndex="-1"
                    />    
                    <Flex
                        as="section"
                        justify="space-between"
                        align="center"
                        maxWidth="90%"
                        mx="auto"
                    >
                        <Box
                          as="article"
                          maxWidth={["90%", "450"]}
                          mx={["auto", 0]}
                        >
                            <Text
                                as="h1"
                                fontSize={["2xl","3xl"]}
                                color="white"
                                fontWeight="500"
                                mb="5"
                            >
                                5 Continentes,<br/>infinitas possibilidades.
                            </Text>
                                
                            <Text
                                fontSize={["xs","md"]}
                                color="white"
                            >
                                Chegou a hora de tirar do papel a viagem que você sempre sonhou
                            </Text>
                        </Box>
                        { isWideVersion && (
                            <Image
                                src="/images/airplane.svg"
                                alt="image airplane" 
                                w="400"
                                height="270"
                                ml="100"
                                alignSelf="flex-end"
                            />
                        )}
                    </Flex>
                </Flex>
    );
}