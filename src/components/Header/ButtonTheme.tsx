import { useColorMode, useColorModeValue, Button, Icon, ButtonProps } from '@chakra-ui/react';
import { RiArrowDropLeftLine, RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function ButtonTheme( { ...rest } : ButtonProps){

    const { colorMode, toggleColorMode } = useColorMode();

    return(
            <Button
              onClick={toggleColorMode}
              border="none"
              bg="transparent"
              {...rest}
            >
                { colorMode === 'dark' ?
                 (
                    <Icon
                    as={RiSunLine}
                    fontSize="25"     
                    
                    />
                 ) : 
                 (
                    <Icon
                    as={RiMoonLine}
                    fontSize="25"     
                    
                    />
                 ) }
            </Button>
    );
}