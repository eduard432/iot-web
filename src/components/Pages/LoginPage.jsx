import React from 'react'
import { Button } from '@chakra-ui/react'

import { startLogin } from '../../actions/authActions'
import { useDispatch } from 'react-redux'

export const LoginPage = () => {
	const dispatch = useDispatch()

	return (
		<Button
			fontSize="25px"
			variant={'glass'}
			px={8}
			py={6}
			onClick={() => dispatch(startLogin())}
		>
			Login With Meta Mask
		</Button>
	)
}
