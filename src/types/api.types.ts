export type CurrencyType = {
	currencyCodeA: number
	currencyCodeB: number
	rateBuy: number
	date: number
	rateSell: number
}

export type CurrencyErrorType = {
	errCode: string
	errText: string
	message?: string
}
