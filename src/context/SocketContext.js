import React, { createContext, useContext, useEffect, useState } from 'react'

import { useSocket } from '../hooks/useSocket'
import { DashboardContext } from './Dashboard/DashboardContext'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {

	const { dashboardState } = useContext(DashboardContext)
	const { socket, connectSocket, disconnectSocket } = useSocket(
		'http://192.168.1.68:8080'
	)
	const [msg, setMsg] = useState({})

	useEffect(() => {
		if(dashboardState.dashboard) {
			connectSocket()
		}
	},[dashboardState, connectSocket])

	useEffect(() => {
		socket?.on('new-msg', (msg) => {
			setMsg(msg)
		})
		return () => {
			disconnectSocket()
		}
	}, [socket, disconnectSocket])

	return (
		<SocketContext.Provider value={{ socket, msg }}>
			{children}
		</SocketContext.Provider>
	)
}
