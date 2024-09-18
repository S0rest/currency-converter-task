import { ReactNode } from 'react'
import { CurrencyErrorType, CurrencyType } from 'types/api.types'

export type LayoutPropType = {
	children: ReactNode
	data: CurrencyType[]
	error: CurrencyErrorType
	isLoading: boolean
}
