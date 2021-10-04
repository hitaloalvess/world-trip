import { extendTheme, ThemeConfig, ThemeComponentProps } from '@chakra-ui/react';

const config : ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    color:{
        yellow:"#FFBA08",
        gray:{
            "50": "#F5F8FA",
            "300": "#DADADA",
            "200": "rgba(153, 153, 153, 0.5)",
            "400":"#999999",
            "600":"#47585B",
            "900":"#0D1117"
        },

    },
    fonts:{
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles:{
        global: ( props: ThemeComponentProps) => ({
            "body":{
                bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
                color: props.colorMode === 'dark' ? 'gray.50' : 'gray.600',
            }
        })
    }
});