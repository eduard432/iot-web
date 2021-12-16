import React from 'react'
import { MainPage } from './components/pages/MainPage'
import { ChakraProvider } from '@chakra-ui/react'

export default function MainApp () {
    return (
        <ChakraProvider>
            <MainPage />
        </ChakraProvider>
    )
}