import React, { useState, useContext } from 'react'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'

import Swal from 'sweetalert2'

import { AuthContext } from '../../context/AuthContext'
import { useForm } from '../../hooks/useForm'

import { Link } from 'react-router-dom'

const initialState = {
	email: 'test1@test.com',
	password: '123456',
}

export const LoginPage = () => {
	const { login } = useContext(AuthContext)


	const [formValues, handleInputChange] =
		useForm(initialState)

	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	const onSubmit = async (e) => {
		e.preventDefault()

		const { email, password } = formValues
		const ok = await login({email, password})

		if(!ok) {
			Swal.fire('Error', ok , 'error')
		}

	}

	const todoOk = () => {
		return formValues.email.length > 0 && formValues.password.length > 5 ? true : false
	}

	return (
		<form onSubmit={onSubmit}>
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<Input
					type="email"
					focusBorderColor="blue.800"
					placeholder="Enter email"
					id={Math.random()}
					name="email"
					value={formValues.email}
					onChange={handleInputChange}
				/>
				<FormHelperText>We'll never share your email.</FormHelperText>
				<FormLabel>Password</FormLabel>
				<InputGroup size="md">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder="Enter password"
						id={Math.random()}
						name="password"
						value={formValues.password}
						onChange={handleInputChange}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<FormHelperText>
					<Link to="/auth/register">Register</Link>
				</FormHelperText>
			</FormControl>
			<Button disabled={!todoOk()} type="submit" backgroundColor="blue.800" color="white" w="full" mt="3.5">
				Login
			</Button>
		</form>
	)
}
