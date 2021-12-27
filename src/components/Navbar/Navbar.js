import React, { useContext } from 'react'

import {
	Box,
	Flex,
	Avatar,
	Select,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	chakra,
	useDisclosure,
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'
import { DashboardContext } from '../../context/Dashboard/DashboardContext'
import { AuthContext } from '../../context/AuthContext'
import { CreateWidget } from '../CreateWidget'

export const Navbar = () => {
	const { dashboardState } = useContext(DashboardContext)
	const { auth, logout } = useContext(AuthContext)
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<CreateWidget isOpen={isOpen} onClose={onClose} />
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Select w={{ base: 'auto', md: 1 / 3, lg: 1 / 4 }} bg={'white'}>
						{dashboardState.dashboards.map((dashboard) =>
							dashboard.lastVisited ? (
								<option
									defaultValue
									value={dashboard.key}
									key={dashboard.key}
								>
									{dashboard.name}
								</option>
							) : (
								<option value={dashboard.key} key={dashboard.key}>
									{dashboard.name}
								</option>
							)
						)}
					</Select>
					<Flex alignItems={'center'} justifyContent={'end'}>
						<Menu>
							<MenuButton
								variant={'solid'}
								as={Button}
								bgColor="blue.800"
								color="white"
								size={'sm'}
								mr={4}
								leftIcon={<AddIcon />}
								_hover={{ bgColor: 'blue.700' }}
							>
								Create
							</MenuButton>
							<MenuList>
								<MenuItem>Create Dashboard</MenuItem>
								<MenuItem>Edit Dashboard</MenuItem>
								<MenuItem onClick={onOpen}>Create Widget</MenuItem>
								<MenuDivider />
								<MenuItem color="red.400">Delete Dashboard</MenuItem>
							</MenuList>
						</Menu>
						<chakra.p mr={1}>{auth.name}</chakra.p>
						<Menu>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
								minW={0}
							>
								<Avatar
									size={'sm'}
									src={
										'https://image.flaticon.com/icons/png/512/236/236832.png'
									}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem>Account</MenuItem>
								<MenuItem>Dashboards</MenuItem>
								<MenuDivider />
								<MenuItem onClick={logout} color="red.400">
									Logout
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
