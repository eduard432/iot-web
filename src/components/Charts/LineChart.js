import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

import { Widget } from '../Ui/Widget'
import { options } from './options'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
]

export const LineChart = ({ name, data }) => {
	const dataConfig = {
		labels,
		friction: 0.9,

		datasets: data.map(({ bgColor, label, color }) => ({
			label,
			backgroundColor: bgColor,
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			borderColor: color,
		})),
		/* datasets: [
			{
				label: 'Dataset 1',
				data: labels.map(() =>
					faker.datatype.number({ min: -1000, max: 1000 })
				),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Dataset 2',
				data: labels.map(() =>
					faker.datatype.number({ min: -1000, max: 1000 })
				),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		], */
	}

	return (
		<Widget>
			<Line
				data={dataConfig}
				options={() => options(name)}
				style={{ maxHeight: '100%' }}
			/>
		</Widget>
	)
}
