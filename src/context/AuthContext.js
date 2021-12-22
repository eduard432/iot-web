import React, { useState, createContext, useCallback, useContext } from 'react'
import {
	loginService,
	registerService,
	renewService,
} from '../services/Auth/Auth'
import { getDashboardsService } from '../services/Dashboard/Dashboard'
import { types } from '../types/TypesDashboard'
import { DashboardContext } from './Dashboard/DashboardContext'

export const AuthContext = createContext()

const initialState = {
	uid: null,
	checking: true,
	logged: false,
	name: null,
	email: null,
}

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState)
	const { dispatch } = useContext(DashboardContext)

	const login = async (userData) => {
		const resp = await loginService(userData)
		if (resp.ok) {
			localStorage.setItem('token', resp.token)
			const { user } = resp
			
			const { dashboards } = await getDashboardsService()

			dispatch({
				type: types.getDashboards,
				payload: dashboards,
			})

			setAuth({
				uid: user.uid,
				checking: false,
				logged: true,
				name: user.name,
				email: user.email,
			})

			return true
		}

		return resp.msg
	}

	const register = async (userData) => {
		const resp = await registerService(userData)

		if (resp.ok) {
			localStorage.setItem('token', resp.token)
			const { user } = resp

			const { dashboards } = await getDashboardsService()

			dispatch({
				type: types.getDashboards,
				payload: dashboards,
			})

			setAuth({
				uid: user.uid,
				checking: false,
				logged: true,
				name: user.name,
				email: user.email,
			})

			return true
		}

		return resp.msg
	}

	const verifyToken = useCallback(async () => {
		const token = localStorage.getItem('token')

		if (!token) {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
				name: null,
				email: null,
			})

			return false
		}

		const resp = await renewService()

		if (resp.ok) {
			localStorage.setItem('token', resp.token)

			const { user } = resp
			const { dashboards } = await getDashboardsService()

			dispatch({
				type: types.getDashboards,
				payload: dashboards,
			})

			setAuth({
				uid: user.uid,
				checking: false,
				logged: true,
				name: user.name,
				email: user.email,
			})

			return true
		} else {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
				name: null,
				email: null,
			})

			return false
		}
	}, [dispatch])

	const logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('dashboardKey')

		dispatch({ type: types.logout })

		setAuth({
			checking: false,
			logged: false,
		})
	}

	return (
		<AuthContext.Provider
			value={{
				auth,
				login,
				register,
				verifyToken,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
