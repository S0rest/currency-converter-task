import { KeyRecord } from '@components/CurrencyTable/CurrencyTable.types'

export type CurrencyState = {
	rates: KeyRecord
	setCurrentRateFromCell: (current: KeyRecord) => void
}