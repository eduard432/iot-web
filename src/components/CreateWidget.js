import React, { useContext } from 'react'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	Input,
	FormLabel,
	Select,
} from '@chakra-ui/react'

import { useForm } from '../hooks/useForm'
import { createWidgetService } from '../services/Dashboard/Dashboard'

import { DashboardContext } from '../context/Dashboard/DashboardContext'

const initialState = {
	name: '',
	type: 'LineChart',
}

export const CreateWidget = ({ isOpen, onClose }) => {
	const [formValues, handleInputChange, reset] = useForm(initialState)
	const { setDashboard } = useContext(DashboardContext)

	const handleClick = async () => {
		if(formValues.name.length) {
			const { dashboard } = await createWidgetService(formValues)
			setDashboard(dashboard)
			reset()
			onClose()
		}
	}

	return (
		<Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create Widget</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl>
						<FormLabel>Chart Title:</FormLabel>
						<Input
							autoComplete="off"
							placeholder="My First Chart"
							name="name"
							value={formValues.name}
							onChange={handleInputChange}
						/>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Type:</FormLabel>
						<Select name="type" value={formValues.type} onChange={handleInputChange} placeholder="Select a chart">
							<option value="LineChart">Line Chart</option>
							<option value="BarChart">Bar Chart</option>
						</Select>
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button onClick={onClose} mx={2} variant="ghost">
						Cancel
					</Button>
					<Button
						mx={2}
						bgColor="blue.800"
						color="white"
						_hover={{ bgColor: 'blue.700' }}
						mr={3}
						onClick={handleClick}
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
