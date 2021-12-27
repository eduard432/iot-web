import React, { useContext, useEffect, useState } from 'react'
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
import moment from 'moment'

import { Widget } from '../Ui/Widget'
import { DashboardContext } from '../../context/Dashboard/DashboardContext'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export const LineChart = ({ name, data, wKey }) => {
	const { msg } = useContext(DashboardContext)

	const [labels, setLabels] = useState([])
	const [dataSet, setDataSet] = useState([])

	useEffect(() => {
		if (msg !== []) {
			const times = msg.map(({ time }) =>
				moment(time).format('DD/MM/YYYY - HH:mm:ss')
			)
			setLabels(times)
		}
	}, [msg])

	useEffect(() => {
		if (msg !== []) {
			const data = msg.map((msg) => msg[wKey])
			setDataSet(data)
		}
	}, [msg, wKey])

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: name,
			},
		},
		scales: {
			x: {
				display: false,
			},
			y: {
				display: false,
			},
		},
	}

	const dataConfig = {
		labels,
		friction: 0.9,

		datasets: data.map(({ bgColor, label, color, name }) => ({
			label,
			backgroundColor: bgColor,
			data: dataSet.map((obj) => {
				return obj?.[name]
			}),
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
				options={options}
				style={{ maxHeight: '100%' }}
			/>
		</Widget>
	)
}
