import { Flex, Image, Text, Box } from '@chakra-ui/react';

export default function Banner(){
    return(
        <Flex
            position="relative"
            h="360"
            w="100%"
        >
            <Image
              src="/images/background.svg"
              alt="background banner"
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
                <Box as = "article" maxWidth="450">
                    <Text
                        as="h1"
                        fontSize="3xl"
                        color="white"
                        fontWeight="500"
                        mb="5"
                    >5 Continentes,<br/>infinitas possibilidades.
                    </Text>
                    
                    <Text
                        fontSize="md"
                        color="white"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou
                    </Text>
                </Box>
                <Image
                  src="/images/airplane.svg"
                  alt="image airplane" 
                  w="400"
                  height="270"
                  ml="100"
                  alignSelf="flex-end"
                />
            </Flex>
        </Flex>
    )
}