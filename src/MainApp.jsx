import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { AppRouter } from './router/AppRouter'

export default function MainApp() {
	const theme = extendTheme({
		components: {
			Button: {
				variants: {
					glass: {
						backdropBlur: 4,
						bgColor: 'rgba(255,255,255, 0.25)',
						boxShadow: 'xl',
						rounded: 10,
						border: '1px',
						borderColor: 'rgba(255,255,255, 0.18)',
						px: '14px',
						py: '4px',
						__focus: {},
					},
				},
			},
		},
	})

	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<AppRouter />
			</ChakraProvider>
		</Provider>
	)
}
