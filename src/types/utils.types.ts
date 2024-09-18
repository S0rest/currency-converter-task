import { KeyRecord } from '@components/CurrencyTable/CurrencyTable.types'
import { CSSProperties } from 'react'

export type CurrencyMapType = Record<
	string,
	{
		currencyCodeA: number
		currencyCodeB: number
		buyKey: keyof KeyRecord
		sellKey: keyof KeyRecord
		reverse: boolean
	}
>

export type IconType = {
	className?: string
	style?: CSSProperties
	fill?: string
}