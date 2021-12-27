import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'

import { LoginPage } from '../components/pages/LoginPage'
import { RegisterPage } from '../components/pages/RegisterPage'

export const AuthRouter = () => {
	return (
		<Flex h="full" alignItems="center" justifyContent="center">
			<Box boxShadow="lg" rounded="md" p="3.5">
				<Switch>
					<Route path="/auth/login" component={LoginPage} />
					<Route path="/auth/register" component={RegisterPage} />

					<Redirect to="/auth/login" />
				</Switch>
			</Box>
		</Flex>
	)
}
