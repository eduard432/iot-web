import React, { createContext, useReducer } from 'react'
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

	return (
		<DashboardContext.Provider
			value={{
				dashboardState,
				dispatch
			}}
		>
			{children}
		</DashboardContext.Provider>
	)
}
