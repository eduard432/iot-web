import React from 'react'

import { Bar, Line } from '../Charts/index.js'

export const Chart = ({ type, ...props }) => {
	switch (type) {
		case 'BarChart':
			return <Bar {...props} />
		case 'LineChart':
			return <Line {...props} />

		default:
			return <Bar {...props} />
	}
}