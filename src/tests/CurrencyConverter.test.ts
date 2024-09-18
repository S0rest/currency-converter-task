import { convertCurrency } from '@utils/utils'

test('USD/UAH calculation with sell-rate in change input', () => {
	// 1. test data
	const initValue = 2
	const rateSell = 37.3

	// 2. action
	const result = convertCurrency(initValue, rateSell, '*')

	// 3. expectation
	expect(result).toBe(74.6)
})

test('UAH/USD calculation with buy-rate in change input', () => {
	// 1. test data
	const initValue = 60
	const rateBuy = 36.08

	// 2. action
	const result = convertCurrency(initValue, rateBuy, '/')

	// 3. expectation
	expect(result.toFixed(3)).toBe((1.663).toString())
})

test('UAH/USD calculation with buy-rate in get input', () => {
	// 1. test data
	const initValue = 2
	const rateBuy = 36.08

	// 2. action
	const result = convertCurrency(initValue, rateBuy, '*')

	// 3. expectation
	expect(result).toBe(72.16)
})

test('USD/UAH calculation with sell-rate in get input', () => {
	// 1. test data
	const initValue = 60
	const rateSell = 37.3

	// 2. action
	const result = convertCurrency(initValue, rateSell, '/')

	// 3. expectation
	expect(result.toFixed(3)).toBe((1.609).toString())
})
