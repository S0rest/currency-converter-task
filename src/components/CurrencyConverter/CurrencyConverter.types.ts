import { CurrencyType } from 'types/api.types'

export type CurrencyConverterPropType = {
	data: CurrencyType[]
}

export type KeyInputType = 'change' | 'get'

export type InputRecord = Record<KeyInputType, string>

export type KeySelectType = 'changeCurrency' | 'getCurrency'

export type CurrencyValueType = 'UAH' | 'USD' | 'EUR'

export type SelectRecord = Record<KeySelectType, CurrencyValueType>

export type RateType = 'buy' | 'sell'

export type RateRecord = Record<RateType, number>