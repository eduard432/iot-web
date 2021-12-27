import React from 'react'
import { Flex, Button } from '@chakra-ui/react'

export const ButtonSpan = ({title}) => {
	return (
		<Flex flexGrow={1} justifyContent={'center'} alignItems={'center'}>
			<Button
				bgColor="blue.800"
				_hover={{ bgColor: 'blue.700' }}
				color="white"
			>
				{title}
			</Button>
		</Flex>
	)
}
