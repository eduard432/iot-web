import React, { createContext, useEffect, useReducer, useState } from 'react'
import { getDashboardInfoService } from '../../services/Dashboard/Dashboard'
import { DashboardReducer } from './DashboardReducer'

export const DashboardContext = createContext()

const initialState = {
	dashboards: {},
	active: null,
	loading: true,
	dashboard: null
}

export const DashboardProvider = ({ children }) => {
	const [dashboardState, dispatch] = useReducer(
		DashboardReducer,
		initialState
	)
	
	const [dashboard, setDashboard] = useState({})

	useEffect(() => {
		getDashboardInfoService().then(({ dashboard }) => {
			console.log(dashboard)
			setDashboard(dashboard)
		})
	}, [setDashboard])

	return (
		<DashboardContext.Provider
			value={{
				dashboardState,
				dispatch,
				dashboard,
				setDashboard
			}}
		>
			{children}
		</DashboardContext.Provider>
	)
}
