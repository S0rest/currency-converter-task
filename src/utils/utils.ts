import {
	CurrencyValueType,
	RateRecord,
	SelectRecord,
} from '@components/CurrencyConverter/CurrencyConverter.types'
import { KeyRecord } from '@components/CurrencyTable/CurrencyTable.types'
import { CurrencyType } from 'types/api.types'
import { CurrencyMapType } from 'types/utils.types'

const getCurrentDate = () => {
	return new Date().toLocaleDateString()
}

export const currencyColumns = [
	{
		title: `${getCurrentDate()}`,
		dataIndex: 'currency',
		key: 'currency',
	},
	{
		title: 'Buy',
		dataIndex: 'buy',
		key: 'buy',
	},
	{
		title: 'Sell',
		dataIndex: 'sell',
		key: 'sell',
	},
]

export const isValidCurrencyValue = (
	previousValue: number,
	currentValue: number
): boolean => {
	const rangeA = +(previousValue + (previousValue / 100) * 10).toFixed(4)
	const rangeB = +(previousValue - (previousValue / 100) * 10).toFixed(4)
	// console.log("rangeA: ", rangeA);
	// console.log("rangeB: ", rangeB);

	if (currentValue <= rangeA && currentValue >= rangeB) {
		return true
	}
	return false
}

type OperatorType = '/' | '*'

export const convertCurrency = (
	value1: number,
	value2: number,
	operator: OperatorType
): number => {
	switch (operator) {
		case '*': {
			return value1 * value2
		}
		case '/': {
			return value1 / value2
		}
		default: {
			throw new Error('Unknown operator')
		}
	}
}

export const getExchangeRateFromSelectedValue = (
	currentSelectValue: CurrencyValueType,
	otherCurrencyValue: CurrencyValueType,
	setReverseMode: React.Dispatch<React.SetStateAction<boolean>>,
	currencyData: CurrencyType[],
	ratesState: KeyRecord
): CurrencyType => {
	// console.log("currentSelectValue: ", currentSelectValue);
	// console.log("otherCurrencyValue: ", otherCurrencyValue);

	const currencyMap: CurrencyMapType = {
		'USD-UAH': {
			currencyCodeA: 840,
			currencyCodeB: 980,
			buyKey: 'buy0',
			sellKey: 'sell0',
			reverse: false,
		},
		'UAH-USD': {
			currencyCodeA: 840,
			currencyCodeB: 980,
			buyKey: 'buy0',
			sellKey: 'sell0',
			reverse: true,
		},
		'EUR-UAH': {
			currencyCodeA: 978,
			currencyCodeB: 980,
			buyKey: 'buy1',
			sellKey: 'sell1',
			reverse: false,
		},
		'UAH-EUR': {
			currencyCodeA: 978,
			currencyCodeB: 980,
			buyKey: 'buy1',
			sellKey: 'sell1',
			reverse: true,
		},
		'EUR-USD': {
			currencyCodeA: 978,
			currencyCodeB: 840,
			buyKey: 'buy2',
			sellKey: 'sell2',
			reverse: false,
		},
		'USD-EUR': {
			currencyCodeA: 978,
			currencyCodeB: 840,
			buyKey: 'buy2',
			sellKey: 'sell2',
			reverse: true,
		},
	}

	const pairKey = `${currentSelectValue}-${otherCurrencyValue}`

	const pairInfo = currencyMap[pairKey]

	if (!pairInfo) {
		throw new Error('Unknown currency pair')
	}

	setReverseMode(pairInfo.reverse)

	const foundData = currencyData.find(
		c =>
			c.currencyCodeA === pairInfo.currencyCodeA &&
			c.currencyCodeB === pairInfo.currencyCodeB
	)!

	if (ratesState?.[pairInfo.buyKey])
		foundData.rateBuy = +ratesState[pairInfo.buyKey]
	if (ratesState?.[pairInfo.sellKey])
		foundData.rateSell = +ratesState[pairInfo.sellKey]

	return foundData
}

export const setCurrentExchangeRate = (
	e: React.ChangeEvent<HTMLSelectElement>,
	currencyData: CurrencyType[],
	ratesState: KeyRecord,
	setRateValue: React.Dispatch<React.SetStateAction<RateRecord>>,
	selectValue: SelectRecord,
	setReverseMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
	let foundData: CurrencyType
	// console.log("Selected value: ", e.target.name + " " + e.target.value);

	if (e.target.name === 'changeCurrency') {
		foundData = getExchangeRateFromSelectedValue(
			e.target.value as CurrencyValueType,
			selectValue.getCurrency,
			setReverseMode,
			currencyData,
			ratesState
		)
	} else {
		foundData = getExchangeRateFromSelectedValue(
			selectValue.changeCurrency,
			e.target.value as CurrencyValueType,
			setReverseMode,
			currencyData,
			ratesState
		)
	}

	setRateValue({
		buy: foundData.rateBuy,
		sell: foundData.rateSell,
	})
}
