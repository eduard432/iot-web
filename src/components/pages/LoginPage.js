import React, { useState } from 'react'
import { 
    Button,
     Flex,
     Box,
     FormControl,
     FormLabel,
     Input,
     FormHelperText,
     InputGroup,
     InputRightElement
 } from '@chakra-ui/react'

export const LoginPage = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (    
    <Flex h="full" alignItems="center" justifyContent="center">
        <Box boxShadow="lg" rounded="md" p="3.5" >
            <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input type='email' focusBorderColor="blue.800" />
                <FormHelperText>We'll never share your email.</FormHelperText>
                    <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button backgroundColor="blue.800" color="white" w="full" mt="3.5">Login</Button>
        </Box>
    </Flex>
    )
}