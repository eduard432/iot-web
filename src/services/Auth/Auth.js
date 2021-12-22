import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch'

export const loginService = async ({email, password}) => {
	const resp = await fetchWithoutToken(
		'auth/login',
		{ email, password },
		'POST'
	)
    return resp
}

export const registerService = async ({email, password, name}) => {

    const resp = await fetchWithoutToken(
        'auth/register',
        {
            name,
            email,
            password
        },
        'POST'
    )

    return resp

}

export const renewService = async () => {
    const resp = await fetchWithToken('auth/renew')
    return resp
}