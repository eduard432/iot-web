import React, { createContext, useContext, useEffect } from 'react'

import { useSocket } from '../hooks/useSocket'
import { DashboardContext } from './Dashboard/DashboardContext'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {

	const { msg, setMsg, dashboard } = useContext(DashboardContext)
	const { socket, connectSocket, online } = useSocket(
		'http://192.168.1.68:8080'
	)

	/* useEffect(() => {
		const key = localStorage.getItem('dashboardKey')
		if(key) {
			connectSocket()
		}
	},[connectSocket]) */

	useEffect(() => {
		if(Object.keys(dashboard).length !== 0) {
			connectSocket()
		}
	}, [connectSocket, dashboard]) 

	useEffect(() => {
		const listener = (payload) => {
			if(msg !== []) {
				setMsg((previoustMessages) => {
					if(previoustMessages.length > 9) {
						previoustMessages.unshift(payload)
						previoustMessages.pop()
					} else {
						previoustMessages.unshift(payload)

					}

					return [...previoustMessages]
				})
			}
		}
		
		if(online) {

			socket.on('new-msg', (payload) => {
				console.log(payload)
				listener(payload)
			})
		}

	}, [socket, msg, setMsg, online])

	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	)
}
