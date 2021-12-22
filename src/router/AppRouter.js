import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { chakra } from '@chakra-ui/react'

import { AuthContext } from '../context/AuthContext'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { AuthRouter } from './AuthRouter'

import { Spinner } from '../components/Ui/Spinner'
import { MainPage } from '../components/pages/MainPage'

export const AppRouter = () => {
	const { auth, verifyToken } = useContext(AuthContext)

	useEffect(() => {
		verifyToken()
	}, [verifyToken])

	if (auth.checking) {
		return <Spinner />
	}


	return (
		<Router>
			<chakra.div h="full">
				<Switch>
					<PublicRoute
						isAuth={auth.logged}
						path="/auth"
						component={AuthRouter}
					/>
					<PrivateRoute
						isAuth={auth.logged}
						path="/home"
						component={MainPage}
					/>

					<Redirect to="/home" />
				</Switch>
			</chakra.div>
		</Router>
	)
}
