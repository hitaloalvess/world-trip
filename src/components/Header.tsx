import { useRouter } from 'next/router'
import Link from 'next/link'
import { Icon, Flex, Image, Button} from '@chakra-ui/react'
import { RiArrowDropLeftLine } from 'react-icons/ri'
import ButtonTheme from './ButtonTheme';

export default function Header(){

    const { asPath } = useRouter()

    return(
        <Flex
          as="header"
          h="20"
          w="100%"
          align="center"
        >
            <Flex
                position="relative"
                w={["95%" ,"80%"]}
                m="auto"
                justify="center"
                align="center"
            >   
                { asPath !== '/' && (
                    <Link href='/'>
                        <Button
                            position="absolute"
                            left="0"
                            bg="transparent"
                        >
                            <Icon
                                as={RiArrowDropLeftLine}
                                
                                fontSize="40" 
                            />
                        </Button>
                    </Link>
                )}
                

                <Image src="/images/logo.svg" alt="world trip logo" justifySelf="center" />
            
                <ButtonTheme 
                    position="absolute"
                    right="0"
                />
            </Flex>
        </Flex>
    );
}