import { Flex } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { DashboardContext } from '../../context/Dashboard/DashboardContext'
import { ButtonSpan } from '../Ui/ButtonSpan'
import { Dashboard } from '../Dashboard'
import { Navbar } from '../Navbar/Navbar'
import { Spinner } from '../Ui/Spinner'

export const MainPage = () => {
	const { dashboardState } = useContext(DashboardContext)

	useEffect(() => {
		console.log(dashboardState)
	})

	if (dashboardState.loading) {
		return <Spinner />
	}

	return (
		<Flex direction={'column'} h={'full'}>
			<Navbar />
			<h1>Hello World</h1>
			{/* {dashboardState.active ? <Dashboard /> : <ButtonSpan />} */}
		</Flex>
	)
}
