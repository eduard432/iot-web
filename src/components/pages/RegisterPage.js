import React from 'react'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

export const RegisterPage = () => {
	const [show, setShow] = React.useState(false)
	const handleClick = () => setShow(!show)

	return (
		<>
			<FormControl>
				<FormLabel>Email address</FormLabel>

				<Input
					type="email"
					focusBorderColor="blue.800"
					placeholder="Enter email"
					id={Math.random()}
				/>
				<FormHelperText>We'll never share your email.</FormHelperText>
				<FormLabel>Password</FormLabel>
				<InputGroup size="md">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder="Enter password"
						id={Math.random()}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<FormLabel>Password again:</FormLabel>

				<Input
					pr="4.5rem"
					type={show ? 'text' : 'password'}
					placeholder="Enter password"
					id={Math.random()}
				/>

				<FormHelperText>
					<Link to="/auth/login">Login</Link>
				</FormHelperText>
			</FormControl>
			<Button backgroundColor="blue.800" color="white" w="full" mt="3.5">
				Register
			</Button>
		</>
	)
}
