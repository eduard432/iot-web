import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch'

export const loginService = async (publicAddress, message) => {
	try {
		const resp = await fetchWithoutToken(
			'auth/login',
			{ publicAddress, message },
			'POST'
		)
		return resp
	} catch (error) {
		console.log(error)
		return { ok: false }
	}
}

export const renewService = async () => {
	try {
		const resp = await fetchWithToken('auth/renew')
		return resp
	} catch (error) {
		console.log(error)
		return { ok: false }
	}
}
