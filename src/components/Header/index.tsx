import { Icon, Flex, Image} from '@chakra-ui/react'
import { RiArrowDropLeftLine, RiMoonLine, RiSunLine } from 'react-icons/ri'
import ButtonTheme from '../ButtonTheme';

export default function Header(){
    return(
        <Flex
          as="header"
          h="20"
          w="100%"
          align="center"
        >
            <Flex
                position="relative"
                w="80%"
                m="auto"
                justify="center"
                align="center"
            >
                <Icon
                  as={RiArrowDropLeftLine}
                  position="absolute"
                  left="0"
                  fontSize="40" 
                />

                <Image src="/images/logo.svg" alt="world trip logo" justifySelf="center" />
            
                <ButtonTheme 
                    position="absolute"
                    right="0"
                />
            </Flex>
        </Flex>
    );
}