import React, { useCallback, useContext, useEffect } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import { DashboardContext } from '../context/Dashboard/DashboardContext'

import { Chart } from './Ui/Chart'
import { getDashboardInfoService } from '../services/Dashboard/Dashboard'
import { types } from '../types/TypesDashboard'

export const Dashboard = () => {
	const { dashboard,  } = useContext(DashboardContext)

	useEffect(() => {
		console.log(dashboard)
	}, [dashboard])

	return (
		<Flex flexGrow={1} p={{ base: 4, md: 8 }}>
			<Grid
				gridAutoFlow={'row'}
				templateColumns={{
					base: 'repeat(2, 1fr)',
					md: 'repeat(8, 1fr)',
					lg: 'repeat(12, 1fr)',
				}}
				w={'full'}
				gap={4}
				autoRows={''}
			>
				{/* {
					dashboard.widgets.map(({ key, type, ...props }) => (
					<Chart key={key} wKey={key} type={type} {...props} />
					))
				} */}
			</Grid>
		</Flex>
		//<h1>Hola mundo</h1>
	)
}
