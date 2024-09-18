import { CurrencyErrorType, CurrencyType } from 'types/api.types'

export type HeaderLayoutPropType = {
	data: CurrencyType[]
	error: CurrencyErrorType
	isLoading: boolean
}
