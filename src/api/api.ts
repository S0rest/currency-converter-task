import { CurrencyType } from 'types/api.types'

export const getCurrency = async (url: string): Promise<CurrencyType[]> => {
	const res = await fetch(url)

	if (!res.ok) {
		const err = await res.json()

		console.log(err?.errText)

		if (err?.errCode === 'TMR') {
			throw new Error(`${err.errText}, try again later.`)
		} else {
			throw new Error(err)
		}
	}

	return res.json()
}
