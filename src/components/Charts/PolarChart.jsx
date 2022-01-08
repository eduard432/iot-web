import React from 'react'
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Titulo Gráfica',
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

export const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(255, 159, 64, 0.5)',
			],
			borderWidth: 1,
		},
	],
}

export const PolarChart = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-4 flex items-center md:col-span-3 justify-center">
			<PolarArea data={data} options={options} className="max-w-full" />
		</div>
	)
}