import { CurrencyType } from 'types/api.types'

export type ColumnType = {
	title: string
	dataIndex: string
	key: string
}

export type CurrencyTablePropType = {
	columns: ColumnType[]
	dataSource: CurrencyType[]
}

export type KeyType = 'buy' | 'sell'

export type KeyRecord = {
	[key: `${KeyType}${number}`]: string
}