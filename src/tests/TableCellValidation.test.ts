import { isValidCurrencyValue } from '@utils/utils'

test('upper bound value should be in +10% and -10% range', () => {
	// 1. test data
	const initValue = 37.3
	const testValue = 41.03

	// 2. action
	const result = isValidCurrencyValue(initValue, testValue)

	// 3. expectation
	expect(result).toBe(true)
})

test('lower bound value should be in +10% and -10% range', () => {
	// 1. test data
	const initValue = 37.3
	const testValue = 33.57

	// 2. action
	const result = isValidCurrencyValue(initValue, testValue)

	// 3. expectation
	expect(result).toBe(true)
})

test('out of upper bound value should be incorrect', () => {
	// 1. test data
	const initValue = 37.3
	const testValue = 41.04

	// 2. action
	const result = isValidCurrencyValue(initValue, testValue)

	// 3. expectation
	expect(result).toBe(false)
})

test('out of lower bound value should be incorrect', () => {
	// 1. test data
	const initValue = 37.3
	const testValue = 33.56

	// 2. action
	const result = isValidCurrencyValue(initValue, testValue)

	// 3. expectation
	expect(result).toBe(false)
})
