import React from 'react'

import { AuthProvider } from './context/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import { DashboardProvider } from './context/Dashboard/DashboardContext'
import { SocketProvider } from './context/SocketContext'

import { AppRouter } from './router/AppRouter'

export default function MainApp() {
	return (
		<DashboardProvider>
			<AuthProvider>
				<SocketProvider>
					<ChakraProvider>
						<AppRouter />
					</ChakraProvider>
				</SocketProvider>
			</AuthProvider>
		</DashboardProvider>
	)
}
