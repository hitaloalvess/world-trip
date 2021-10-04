import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../styles/theme'

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    {/*Font Poppins*/}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

                    {/*Fonte Barlow*/}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&display=swap" rel="stylesheet"></link>
                    
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}