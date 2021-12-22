import { fetchWithToken } from '../../helpers/fetch'

export const getDashboardsService = async () => {
	return await fetchWithToken('dashboard/dashboards')
}

export const getDashboardInfoService = async () => {
	const key = localStorage.getItem('dashboardKey')
	const resp = await fetchWithToken('dashboard', { key }, 'POST')
	return resp
}

export const createWidgetService = async ({ name, type }) => {
	const key = localStorage.getItem('dashboardKey')
	const resp = await fetchWithToken(
		'widget',
		{
			key,
			name,
			type,
			config: {},
			data: [
				{
					name: 'val1',
					label: 'Value 1',
					bgColor: 'rgb(255,99,132)',
					color: 'rgb(255,99,132)',
				},
				{
					name: 'val2',
					label: 'Value 2',
					bgColor: 'rgb(53,162,235)',
					color: 'rgb(53,162,235)',
				},
			],
		},
		'POST'
	)
	return resp
}
