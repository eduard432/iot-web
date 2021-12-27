import React, { createContext, useEffect, useReducer, useState } from 'react'
import { getDashboardInfoService, getMessages } from '../../services/Dashboard/Dashboard'
import { DashboardReducer } from './DashboardReducer'

export const DashboardContext = createContext()

const initialState = {
	dashboards: {},
	active: null,
	loading: true,
	msg: undefined
}

export const DashboardProvider = ({ children }) => {
	const [dashboardState, dispatch] = useReducer(
		DashboardReducer,
		initialState
	)
	
	const [dashboard, setDashboard] = useState({})
	const [msg, setMsg] = useState([])

	useEffect(() => {

		const key = localStorage.getItem('dashboardKey')

		if(key) {
			getDashboardInfoService().then(({ dashboard }) => {
				setDashboard(dashboard)
			})
		}

	},[setDashboard])

	useEffect(() => {
		const key = localStorage.getItem('dashboardKey')
		if(key) {
			getMessages().then((resp) => {
				// console.log(resp)
				const messages = resp.msg.map(({data}) => ({...data})).reverse()
				setMsg(messages)
			})
		}
	},[])

	return (
		<DashboardContext.Provider
			value={{
				dashboardState,
				dispatch,
				dashboard,
				setDashboard,
				msg,
				setMsg
			}}
		>
			{children}
		</DashboardContext.Provider>
	)
}
